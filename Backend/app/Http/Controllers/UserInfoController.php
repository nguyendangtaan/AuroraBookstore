<?php

namespace App\Http\Controllers;

use App\Models\UserInfo;
use Illuminate\Http\Request;

class UserInfoController extends Controller
{
    // Lấy danh sách user info
    public function index()
    {
        return response()->json(UserInfo::all());
    }

    // Lấy thông tin user theo ID
    public function show($id)
    {
        $userInfo = UserInfo::find($id);

        if (!$userInfo) {
            return response()->json(['message' => 'User not found'], 404);
        }

        return response()->json($userInfo);
    }

    // Tạo user info mới
    public function store(Request $request)
    {
        $data = $request->validate([
            'avatar' => 'nullable|url',
            'full_name' => 'required|string|max:255',
            'username' => 'required|string|max:255|unique:user_infos',
            'birthday' => 'required|date',
            'gender' => 'required|in:Male,Female,Other',
            'address' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:15',
            'email' => 'required|email|max:255|unique:user_infos',
            'province' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:255',
        ]);

        $userInfo = UserInfo::create($data);
        return response()->json($userInfo, 201);
    }

    // Cập nhật user info
    public function update(Request $request, $id)
    {
        $userInfo = UserInfo::find($id);

        if (!$userInfo) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $data = $request->validate([
            'avatar' => 'nullable|url',
            'full_name' => 'sometimes|string|max:255',
            'username' => 'sometimes|string|max:255|unique:user_infos,username,' . $id,
            'birthday' => 'sometimes|date',
            'gender' => 'sometimes|in:Male,Female,Other',
            'address' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:15',
            'email' => 'sometimes|email|max:255|unique:user_infos,email,' . $id,
            'province' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:255',
        ]);

        $userInfo->update($data);
        return response()->json($userInfo);
    }

    // Xóa user info
    public function destroy($id)
    {
        $userInfo = UserInfo::find($id);

        if (!$userInfo) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $userInfo->delete();
        return response()->json(['message' => 'User deleted successfully']);
    }
}
