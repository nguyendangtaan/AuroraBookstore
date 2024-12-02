<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserInfo extends Model
{
    use HasFactory;

    protected $fillable = [
        'avatar',
        'full_name',
        'username',
        'birthday',
        'gender',
        'address',
        'phone',
        'email',
        'province',
        'city',
    ];
}
