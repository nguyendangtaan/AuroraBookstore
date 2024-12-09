<?php

// app/Models/CartBook.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartBook extends Model
{
    use HasFactory;

    protected $table = 'cart_books'; // Tên bảng
    public $timestamps = false; // Không sử dụng timestamps (created_at, updated_at)

    public function cart()
    {
        return $this->belongsTo(Cart::class, 'cartid', 'cartid');
    }

    public function book()
    {
        return $this->belongsTo(Book::class, 'bid', 'bid');
    }
}
