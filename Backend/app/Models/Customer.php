<?php

// app/Models/Customer.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $table = 'customers'; // Tên bảng
    protected $primaryKey = 'cusid'; // Khóa chính

    public function cart()
    {
        return $this->hasOne(Cart::class, 'cartid', 'cartid');
    }

    public function account()
    {
        return $this->hasOne(Account::class, 'username', 'username');
    }
}
