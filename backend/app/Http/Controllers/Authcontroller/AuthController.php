<?php

namespace App\Http\Controllers\Authcontroller;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;   

class AuthController extends Controller
{
    public function user_register(Request $request){
        $request->validate([
             'name' => 'required|string',
             'email' => 'required|unique:users',
             'password' => 'required|min:6',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'status'=> 200,
            'message' => 'User Created Successfully',
        ]);
    }
}
