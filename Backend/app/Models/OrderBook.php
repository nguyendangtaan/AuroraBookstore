<?php

// app/Models/OrderBook.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderBook extends Model
{
    use HasFactory;

    protected $table = 'order_books'; // Tên bảng
    public $timestamps = false; // Không sử dụng timestamps

    public function orderr()
    {
        return $this->belongsTo(Orderr::class, 'orderid', 'orderid');
    }

    public function book()
    {
        return $this->belongsTo(Book::class, 'bid', 'bid');
    }
}

