<?php

// app/Models/Account.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;

    protected $table = 'accounts'; // Tên bảng
    protected $primaryKey = 'username'; // Khóa chính

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'cusid', 'cusid');
    }
}
