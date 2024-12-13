<?php

namespace App\Http\Middleware;

use App\Models\Tenant;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Middleware;
use Auth;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'vue.application';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        // Determine if the URL starts with 'partner'
        $isPartnerNamespace = Str::startsWith($request->url(), url('/partner'));
        $isSellerNamespace = Str::startsWith($request->url(), url('/seller'));

        if ($isPartnerNamespace){
            $stores=Tenant::where('user_id',Auth::id())->get();
            $userData = Auth::user()->only(['id','fullName', 'username','avatar','email', 'role']);

            // Add the tenants data to the user data array
            $userData['stores'] = $stores;

            $userAbilityRules = [
                [
                    'action' => 'manage',
                    'subject' => 'all',
                ],
            ];

            return array_merge(parent::share($request), [
                'sharedData' => [
                    'userData' => $userData,
                    'userAbilityRules' => $userAbilityRules,
                    'stores' => function () {
                        return Tenant::where('user_id', Auth::id())->select('id', 'uid')->get();
                    }
                ]
            ]);
        }elseif ($isSellerNamespace){
            $userData = Auth::user()->only(['id','fullName', 'username','avatar','email', 'role']);

            $userAbilityRules = [
                [
                    'action' => 'manage',
                    'subject' => 'all',
                ],
            ];

            return array_merge(parent::share($request), [
                'sharedData' => [
                    'userData' => $userData,
                    'userAbilityRules' => $userAbilityRules,
                ]
            ]);
        }else{
            return array_merge(parent::share($request), [
                //
            ]);
        }

    }
}
