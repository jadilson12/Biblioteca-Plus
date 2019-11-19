<?php

namespace App\Http\Controllers\Categoria;

use App\Http\Controllers\Controller;
use App\Models\Categoria\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    public function get()
    {
        try {
            return response(Categoria::all(), 200);

        } catch (\Exception $exception) {
            return response('Not Found', 404);
        }
    }

    public function post(Request $request)
    {
        try {
            $categoria = Categoria::store($request);
            return response($categoria, 201);

        } catch (\Exception $exception) {
            return response('Failed in store');
        }
    }

    public function show($id)
    {
        try {
            return response(Categoria::findOrFail($id), 200);

        } catch (\Exception $exception) {
            return response('Not Found', 404);
        }
    }

    public function put(Request $request, $id)
    {
        try {
            $categoria = Categoria::patch($request, $id);
            return response($categoria, 200);

        } catch (\Exception $exception) {
            return response('Failed in update');
        }
    }

    public function delete($id)
    {
        try {
            $categoria = Categoria::destroy($id);

            if ($categoria) $categoria = ['message' => 'Delete Success'];

            if (!$categoria) {
                $categoria = ['message' => 'Not found Category'];
                return response($categoria, 404);
            }

            return response($categoria, 200);

        } catch (\Exception $exception) {
            return response('Not Found', 404);
        }
    }

}
