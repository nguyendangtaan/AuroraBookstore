<?php

// app/Models/Book.php

// app/Models/Author.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    use HasFactory;

    protected $table = 'authors'; // Tên bảng
    protected $primaryKey = 'auid'; // Khóa chính

    public function books()
    {
        return $this->hasMany(Book::class, 'auid', 'auid');
    }
}
