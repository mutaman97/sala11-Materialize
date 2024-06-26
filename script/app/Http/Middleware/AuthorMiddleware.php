<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class AuthorMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (Auth::check() && Auth::User()->role_id == 4) {
            if (Auth::user()->status == 1) {
                return $next($request);
            }
        }else{
            return to_route('login');
        }
    }
}
