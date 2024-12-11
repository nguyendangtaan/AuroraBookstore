<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    use HasFactory;

    protected $fillable = [
        'author_name',
        'author_slug',
        'yob',
        'nationality',
        'author_img',
        'author_desc',
    ];

    public function books(){
        return $this->hasMany(Book::class);
    }

    public function getRouteKeyName(){
        return 'slug';
    }
}