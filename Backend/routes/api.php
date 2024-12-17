<?php

use App\Http\Controllers\Api\AuthorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('authors', [AuthorController::class, 'index']);
Route::get('authors/{id}/books', [AuthorController::class, 'authorBook']);
