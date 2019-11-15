<?php

namespace App\Http\Controllers\Livro;

use App\Http\Controllers\Controller;
use App\Models\Livro\Livro;
use Illuminate\Http\Request;

class LivroController extends Controller
{
    public function get()
    {
        try {
            $livros = Livro::getLivrosWithRelationships();
            return response($livros, 200);

        } catch (\Exception $exception) {
            return response('Not Found', 404);
        }
    }

    public function post(Request $request)
    {
        try {
            $livro = Livro::store($request);
            return response($livro, 201);

        } catch (\Exception $exception) {
            return response('Not Found', 404);
        }
    }

    public function show($id)
    {
        try {
            return response(Livro::findOrFail($id), 200);

        } catch (\Exception $exception) {
            return response('Not Found', 404);
        }
    }

    public function put(Request $request, $id)
    {
        try {
            $livro = Livro::patch($request, $id);
            return response($livro, 200);

        } catch (\Exception $exception) {
            return response('Not Found', 404);
        }
    }

    public function delete($id)
    {
        try {
            $livro = Livro::destroy($id);

            if ($livro) $livro = ['message' => 'Delete Success'];

            if (!$livro) {
                $livro = ['message' => 'Not found Book'];
                return response($livro, 404);
            }

            return response($livro, 200);

        } catch (\Exception $exception) {
            return response('Not Found', 404);
        }
    }
}
