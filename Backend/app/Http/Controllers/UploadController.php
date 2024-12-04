<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadController extends Controller
{
    public function uploadAvatar(Request $request)
    {
        $request->validate([
            'file' => 'required|file|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
    
        if ($request->file('file')) {
            $path = $request->file('file')->store('avatars', 'public'); 
            return response()->json(['url' => asset('storage/' . $path)], 201); 
        }
    
        return response()->json(['message' => 'File upload failed'], 400);
    }
    
}

