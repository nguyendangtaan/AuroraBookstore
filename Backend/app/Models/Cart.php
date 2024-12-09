<?php

// app/Models/Cart.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    protected $table = 'carts'; // Tên bảng
    protected $primaryKey = 'cartid'; // Khóa chính

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'cusid', 'cusid');
    }

    public function cartBooks()
    {
        return $this->hasMany(CartBook::class, 'cartid', 'cartid');
    }
}
