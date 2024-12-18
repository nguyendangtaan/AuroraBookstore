<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookResource;
use App\Models\Author;
use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index()
    {
        return response()->json([
            'data' => Book::with('author')->latest()->get()
        ]);
    }
public function categories()
{
    dd('Categories method is being called!');
    
    // Cách bạn đang lấy danh sách thể loại
    $categories = Book::distinct()->pluck('category')->sort()->values();

    return response()->json([
        'categories' => $categories
    ]);
}

    /**
     * Get product by slug
     */
    public function show(Book $book)
    {
        if(!$book) {
            abort(404);
        }
        return BookResource::make(
            $book->load(['author']));
    }

    /**
     * Filter Books by Author
     */
    public function filterBooksByAuthor(Author $author)
    {
        return BookResource::collection(
            $author->books()->with(['author'])
            ->latest()->get())
            ->additional([
                'author' => Author::has('books')->get()
            ]);
    }

  
    /**
     * Search for Books by term
     */
    public function findBooksByTerm($searchTerm)
    {
        return BookResource::collection(
            Book::where('book_name', 'LIKE', '%'.$searchTerm.'%')
            ->with(['author'])
            ->latest()->get())
            ->additional([
                'author' => Author::has('books')->get(),
            ]);
    }
}
