<?php

// app/Models/Review.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $table = 'reviews'; // Tên bảng
    protected $primaryKey = 'rateid'; // Khóa chính

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'cusid', 'cusid');
    }

    public function book()
    {
        return $this->belongsTo(Book::class, 'bid', 'bid');
    }

    public function order()
    {
        return $this->belongsTo(Order::class, 'orderid', 'orderid');
    }
}
