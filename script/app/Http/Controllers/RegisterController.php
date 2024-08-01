<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateStoreRequest;
use App\Jobs\SendEmailJob;
use App\Mail\PlanMail;
use App\Models\Domain;
use App\Models\Getway;
use App\Models\Option;
use App\Models\Order;
use App\Models\Plan;
use App\Models\Tenant;
use App\Models\Tenantorder;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Hash;
use Auth;
use Artesaos\SEOTools\Facades\SEOMeta;
use Artesaos\SEOTools\Facades\OpenGraph;
use Artesaos\SEOTools\Facades\TwitterCard;
use Artesaos\SEOTools\Facades\JsonLd;
use Artesaos\SEOTools\Facades\JsonLdMulti;
use Artesaos\SEOTools\Facades\SEOTools;

use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Laravel\Pennant\Feature;

// Import the Registered event

class RegisterController extends Controller
{
    public function index(Request $request)
    {
        if($request->email)
        {
            $email = $request->email;
        }else {
            $email = '';
        }

        $seo=get_option('seo_home',true);

        JsonLdMulti::setTitle('Register');
        JsonLdMulti::setDescription($seo->matadescription ?? null);
        JsonLdMulti::addImage(asset('uploads/logo.png'));

        SEOMeta::setTitle('Register');
        SEOMeta::setDescription($seo->matadescription ?? null);
        SEOMeta::addKeyword($seo->tags ?? null);

        SEOTools::setTitle('Register');
        SEOTools::setDescription($seo->matadescription ?? null);
        SEOTools::setCanonical(url('/'));
        SEOTools::opengraph()->addProperty('keywords', $seo->matatag ?? null);
        SEOTools::opengraph()->addProperty('image', asset('uploads/logo.png'));
        SEOTools::twitter()->setTitle('Register');
        SEOTools::twitter()->setSite($seo->twitter_site_title ?? null);
        SEOTools::jsonLd()->addImage(asset('uploads/logo.png'));

//        if (Feature::active('vue-homepage')) {
//            return Inertia::render('register-multi-steps', [
//                'info' => "info",
//            ]);
//        }
        return Inertia::render('create-store', [
            'info' => "info",
        ]);

        return view('register',compact('email'));
    }

    public function login()
    {
         $seo=get_option('seo_home',true);

        JsonLdMulti::setTitle('Login');
        JsonLdMulti::setDescription($seo->matadescription ?? null);
        JsonLdMulti::addImage(asset('uploads/logo.png'));

        SEOMeta::setTitle('Login');
        SEOMeta::setDescription($seo->matadescription ?? null);
        SEOMeta::addKeyword($seo->tags ?? null);

        SEOTools::setTitle('Login');
        SEOTools::setDescription($seo->matadescription ?? null);
        SEOTools::setCanonical(url('/'));
        SEOTools::opengraph()->addProperty('keywords', $seo->matatag ?? null);
        SEOTools::opengraph()->addProperty('image', asset('uploads/logo.png'));
        SEOTools::twitter()->setTitle('Login');
        SEOTools::twitter()->setSite($seo->twitter_site_title ?? null);
        SEOTools::jsonLd()->addImage(asset('uploads/logo.png'));
        return view('login');
    }

    public function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:users,email',
            'phone_number' => 'required|string|min:10|max:10|unique:users,phone',
            // 'phone' => 'required|phone:SD',
            'password' => 'required|confirmed'
        ]);

        // Added By Mutaman for contact page google recaptcha
        if(env('NOCAPTCHA_SITEKEY') != null)
        {
            $messages = [
                    'g-recaptcha-response.required' => __('You must check the reCAPTCHA'),
                    'g-recaptcha-response.captcha' => __('Captcha error! try again later or contact site admin'),
                ];

                $validator = \Validator::make($request->all(), [
                    'g-recaptcha-response' => 'required|captcha'
                ], $messages);

                if ($validator->fails())
                {
                    return redirect()->back()->withErrors($validator)->withInput();
                }
        }
        //  End added

        $user = new User();
        $user->role_id = 2;
        $user->name = $request->first_name . ' ' . $request->last_name;
        $user->email = $request->email;
        $user->phone = $request->phone_number;
        $user->subscribed_to_newsletter=$request->has('subscribed_to_newsletter');
        $user->password = Hash::make($request->password);
        $user->save();

        Auth::login($user,true);

       event(new Registered($user)); // Trigger the Registered event

        // TODO ---- this bug dont show the flash message at the dashboard
        return to_route('login')->with('status', __('A verification link has been sent to your email address. Please check your email to verify your account'));
        // logger($user);
        // return to_route('login');
    }

    public function register(CreateStoreRequest $request)
    {
        // Retrieve the validated input data...
        $validated = $request->validated();


        $user = new User();
        $user->role_id = 2;
        $user->name = $validated['first_name'] . ' ' . $validated['last_name'];
        $user->email = $validated['email'];
        $user->username = $validated['email'];
        $user->phone = $validated['phone_number'];
        $user->subscribed_to_newsletter=$request->has('subscribed_to_newsletter');
        $user->password = Hash::make($request->password);
        $user->save();

        Auth::login($user,true);

//        event(new Registered($user)); // Trigger the Registered event


        $name = $validated['store_name'];

        $plan = Plan::where([['status', 1], ['is_trial', 1]])->first();
        $tax = Option::where('key','tax')->first();
        $plan_data = json_decode($plan->data);

        $tax_amount= ($plan->price / 100) * $tax->value;
        // Insert transaction data into order table

        $order = new Order;
        $order->plan_id = $plan->id;
        $order->user_id = \Illuminate\Support\Facades\Auth::id();
        $order->getway_id = 13;
        $order->tax = $tax_amount;
        $order->price = $plan->price;
        $order->status = 1;
        $order->payment_status = 1;
        $order->will_expire = Carbon::now()->addDays($plan->duration);
        $order->save();



        ini_set('max_execution_time', '0');

        $gateway = Getway::findOrFail($order->getway_id);
        $totalAmount = $plan->price * $gateway->rate;

        $exp_days =  $plan->duration;
        $expiry_date = \Carbon\Carbon::now()->addDays($exp_days)->format('Y-m-d');

        $status= env('AUTO_TENANT_APPROVE') == true ? 1 : 2;
        $plan_info=json_decode($plan->data ?? '');

        if(env('AUTO_DB_CREATE') == true) {
            if ($order->status == 1) {
                $tenant = new  Tenant;
                foreach ($plan_info ?? [] as $key => $value) {
                    $tenant->$key=$value;
                }
                $tenant->status=$status;
            }
            else{
                $tenant=new \App\Tenant;
                $tenant->status = 2;
            }
        }
        else{
            $tenant=new \App\Tenant;
            $tenant->status = 2;
        }

        $tenant->id=str($name)->slug();
        $tenant->uid=\App\Tenant::count()+1;
        $tenant->order_id=$order->id;
        $tenant->user_id= \Illuminate\Support\Facades\Auth::id();
        $tenant->will_expire=$expiry_date;

        $tenant->save();

        DB::beginTransaction();
        try {


            $tenant_id=str($name)->slug();

            $domain_name = $name.'.'.env('APP_PROTOCOLESS_URL');
            $type = 2;
            $status = env('AUTO_SUBDOMAIN_APPROVE') == true ? 1 : 2;
            if(env('AUTO_DB_CREATE') == true && $tenant->status == 1) {
                $tenant->domains()->create(['domain'=>$domain_name,'tenant_id'=>$tenant_id,'type'=>$type,'status'=>$status]);

                $tenant->tenantorderlog()->create(['order_id'=>$order->id]);
            }

            else{
                $domain=new Domain;
                $domain->domain=$domain_name;
                $domain->tenant_id=$tenant_id;
                $domain->type=$type;
                $domain->status=$status;
                $domain->save();

                $log=new Tenantorder;
                $log->order_id=$order->id;
                $log->tenant_id=$tenant_id;
                $log->save();
            }
            DB::commit();

        } catch (\Throwable $th) {
            DB::rollback();
            return $th;
            $error['errors']['email']='Error Occured';

            return response()->json($error,422);
        }
//
//        $data = [
//            'type'    => 'plan',
//            'email'   => env('MAIL_TO'),
//            'name'    => Auth::user()->name,
//            'message' => "Successfully Paid " . round($totalAmount, 2) . " (charge included) for " . $plan->name . " plan",
//        ];
//
//        if (env('QUEUE_MAIL') == 'on') {
//            dispatch(new SendEmailJob($data));
//        } else {
//            Mail::to(env('MAIL_TO'))->send(new PlanMail($data));
//        }

        if($plan->is_trial == 1)
        {
            $store_lock = true;
        }else{
            $store_lock = false;
        }


        return to_route('merchant.dashboard');

    }


}
