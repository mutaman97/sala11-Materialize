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
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

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

        return Inertia::render('create-store', [
            'info' => "info",
        ]);

//        return view('register',compact('email'));
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
//        return view('login');

        return Inertia::render('login', [
            'info' => "info",
        ]);
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
        $validated = $request->validated();
        $user = $this->createUser($request);
        Auth::login($user, true);
        event(new Registered($user)); // Trigger the Registered event

        $order = $this->createOrder($user->id);
        $tenant = $this->createTenant($order, $validated['store_name']);

        DB::beginTransaction();

        try {
            $this->handleDomainAndLog($order, $tenant);
            DB::commit();
            return to_route('merchant.dashboard');
        } catch (\Throwable $th) {
            DB::rollback();
            throw $th; // Or handle the exception as needed
        }
        $this->sendNotificationEmail($order);
    }

    protected function createUser(CreateStoreRequest $request): User
    {
        $validated = $request->validated(); // Retrieve the validated data from the request

        $user = new User();
        $user->role_id = 2;
        $user->name = "{$validated['first_name']} {$validated['last_name']}";
        $user->email = $validated['email'];
        $user->username = $validated['email'];
        $user->phone = $validated['phone_number'];
        $user->subscribed_to_newsletter = $request->has('subscribed_to_newsletter');
        $user->password = Hash::make($validated['password']); // Use validated data for password
        $user->save();

        return $user;
    }

    protected function createOrder(int $userId): Order
    {
        $plan = Plan::where([['status', 1], ['is_trial', 1]])->firstOrFail();
        $tax = Option::where('key', 'tax')->firstOrFail();
        $planData = json_decode($plan->data);


        $taxAmount = ($plan->price / 100) * $tax->value;
        $order = new Order;
        $order->fill([
            'plan_id' => $plan->id,
            'user_id' => $userId,
            'getway_id' => 13,
            'tax' => $taxAmount,
            'price' => $plan->price,
            'status' => 1,
            'payment_status' => 1,
            'will_expire' => Carbon::now()->addDays($plan->duration),
        ]);
        $order->save();
        return $order;
    }

    protected function createTenant(Order $order, string $storeName): Tenant
    {
        $plan = Plan::find($order->plan_id);
        $planInfo = json_decode($plan->data ?? '');

        $status = env('AUTO_TENANT_APPROVE') ? 1 : 2;
        $tenant = new Tenant;
        foreach ($planInfo ?? [] as $key => $value) {
            $tenant->$key = $value;
        }
        $tenant->status = $status;
        $tenant->id = str($storeName)->slug();
        $tenant->uid = Tenant::count() + 1;
        $tenant->order_id = $order->id;
        $tenant->plan_id = $plan->id;
        $tenant->user_id = $order->user_id;
        $tenant->will_expire = Carbon::now()->addDays($plan->duration)->format('Y-m-d');
        $tenant->save();
        return $tenant;
    }

    protected function handleDomainAndLog(Order $order, Tenant $tenant)
    {
        $domainName = "{$tenant->id}." . env('APP_PROTOCOLESS_URL');
        $type = 2;
        $status = env('AUTO_SUBDOMAIN_APPROVE') ? 1 : 2;

        if (env('AUTO_DB_CREATE') && $tenant->status == 1) {
            $tenant->domains()->create([
                'domain' => $domainName,
                'tenant_id' => $tenant->id,
                'type' => $type,
                'status' => $status
            ]);
            $tenant->tenantorderlog()->create(['order_id' => $order->id]);
        } else {
            Domain::create([
                'domain' => $domainName,
                'tenant_id' => $tenant->id,
                'type' => $type,
                'status' => $status
            ]);
            Tenantorder::create([
                'order_id' => $order->id,
                'tenant_id' => $tenant->id
            ]);
        }
    }

    protected function sendNotificationEmail(Order $order)
    {
        $plan = Plan::find($order->plan_id);
        $totalAmount = $plan->price * Getway::find($order->getway_id)->rate;

        $data = [
            'type' => 'plan',
            'email' => env('MAIL_TO'),
            'name' => Auth::user()->name,
            'message' => "Successfully Paid " . round($totalAmount, 2) . " (charge included) for " . $plan->name . " plan",
        ];

        if (env('QUEUE_MAIL') === 'on') {
            dispatch(new SendEmailJob($data));
        } else {
            Mail::to(env('MAIL_TO'))->send(new PlanMail($data));
        }
    }
}
