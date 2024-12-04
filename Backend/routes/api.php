<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserInfoController;
use App\Http\Controllers\UploadController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::apiResource('user-info', App\Http\Controllers\UserInfoController::class);

// routes/web.php
Route::post('/upload-avatar', [UploadController::class, 'uploadAvatar']);
