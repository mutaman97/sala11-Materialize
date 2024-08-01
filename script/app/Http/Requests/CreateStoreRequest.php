<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'store_name' => ['required', Rule::unique('tenants', 'id')],
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => ['required', 'email', Rule::unique('users', 'email')],
            'phone_number' => ['required', 'string', 'min:10', 'max:10', Rule::unique('users', 'phone')],
            'password' => 'required|confirmed|min:8',
        ];
    }
//
//    /**
//     * Customize the validation messages.
//     *
//     * @return array
//     */
//    public function messages(): array
//    {
//        return [
//            'first_name.required' => 'The first name is required.',
//            'last_name.required' => 'The last name is required.',
//            'email.required' => 'The email address is required.',
//            'email.email' => 'The email address must be a valid email address.',
//            'email.unique' => 'The email address is already in use.',
//            'phone_number.required' => 'The phone number is required.',
//            'phone_number.unique' => 'The phone number is already in use.',
//            'password.required' => 'The password is required.',
//            'password.confirmed' => 'The password confirmation does not match.',
//        ];
//    }
}
