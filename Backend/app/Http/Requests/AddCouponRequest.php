<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddCouponRequest extends FormRequest
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
            //
            'coupon_name' => 'required|max:255|unique:coupons',
            'discount' => 'required',
            'valid_until' => 'required',
        ];
    }

    public function messages()
    {
        return [
            //
            'valid_until.required' => 'The coupon validity is required',
        ];
    }
}
