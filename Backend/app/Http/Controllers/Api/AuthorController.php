<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\AuthorResource;
use Illuminate\Http\Request;
use App\Models\Author;

class AuthorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return AuthorResource::collection(
            Author::latest()->paginate(12)
        );
    }

    /**
     * Display a listing of the resource for main page
     */
    public function authorBook($id)
    {
        $author = Author::with('books')->findOrFail($id);

        // Trả về thông tin tác giả và sách liên quan
        return response()->json([
            'success' => true,
            'data' => [
                'author' => new AuthorResource($author), // Resource cho tác giả
            ]
        ], 200);
    }

}
