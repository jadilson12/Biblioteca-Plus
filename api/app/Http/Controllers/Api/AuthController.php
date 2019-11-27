<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request)
    {

        $validateData = $request->all();

        $validateData['password'] = bcrypt($request->password);

        $user = User::create($validateData);

        $accessToken = $user->createToken('authToken')->accessToken;

        return response(['user' => $user, 'access_token' => $accessToken]);

    }

    public function login(Request $request)
    {

        $validateData = $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required|string|',
        ]);

        if(!auth()->attempt($validateData)){
            return  response(['message'=> 'Login invalido']);
        }

        $accessToken = auth()->user()->createToken('authToken')->accessToken;

        return response(['user'=> auth()->user(), 'access_token' => $accessToken]);
    }
}
