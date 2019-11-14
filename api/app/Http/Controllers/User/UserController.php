<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use \Illuminate\Database\QueryException;

class UserController extends Controller
{
    public function get()
    {
        try {
            return response(User::all(), 200);

        } catch (\Exception $exception) {
            return response('Not Found', 404);
        }
    }

    public function post(Request $request)
    {
        try {
            $user = User::store($request);
            return response($user, 201);

        } catch (QueryException $exception) {
            return response(['message' => 'Duplicate entry email'], 404);
        }
    }

    public function show($id)
    {
        try {
            return response(User::findOrFail($id), 200);

        } catch (\Exception $exception) {
            return response('Not Found', 404);
        }
    }

    public function put(Request $request, $id)
    {
        try {
            $user = User::patch($request, $id);
            return response($user, 200);

        } catch (\Exception $exception) {
            return response('Not Found', 404);
        }
    }

    public function delete($id)
    {
        try {
            $user = User::destroy($id);

            if ($user) $user = ['message' => 'Delete Success'];

            if (!$user) {
                $user = ['message' => 'Not found User'];
                return response($user, 404);
            }

            return response($user, 200);

        } catch (\Exception $exception) {
            return response('Not Found', 404);
        }
    }
}
