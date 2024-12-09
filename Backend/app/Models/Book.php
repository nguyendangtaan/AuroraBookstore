<?php

// app/Models/Book.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $table = 'books'; // Tên bảng
    protected $primaryKey = 'bid'; // Khóa chính

    public function author()
    {
        return $this->belongsTo(Author::class, 'auid', 'auid');
    }

    public function reviews()
    {
        return $this->hasMany(Review::class, 'bid', 'bid');
    }

    public function orderBooks()
    {
        return $this->hasMany(OrderBook::class, 'bid', 'bid');
    }

    public function cartBooks()
    {
        return $this->hasMany(CartBook::class, 'bid', 'bid');
    }
}
