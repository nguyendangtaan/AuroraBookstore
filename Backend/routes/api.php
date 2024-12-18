<?php

use App\Http\Controllers\Api\AuthorController;
use App\Http\Controllers\Api\BookController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('authors', [AuthorController::class, 'index']);
Route::get('authordetail/{id}', [AuthorController::class, 'authorBook']);
Route::get('books', [BookController::class, 'index'])->name('books.index');
Route::get('books/{book_id}', [BookController::class, 'show']);
Route::get('authors/{author}/books', [AuthorController::class, 'filterBooksByAuthor'])->name('authors.books');
Route::get('books/categories', [BookController::class, 'categories']);


