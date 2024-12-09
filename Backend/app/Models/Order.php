<?php

// app/Models/Orderr.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orderr extends Model
{
    use HasFactory;

    protected $table = 'orders'; // Tên bảng
    protected $primaryKey = 'orderid'; // Khóa chính

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'cusid', 'cusid');
    }

    public function orderBooks()
    {
        return $this->hasMany(OrderBook::class, 'orderid', 'orderid');
    }
}
