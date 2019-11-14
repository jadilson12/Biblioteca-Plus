<?php

namespace App\Models\Livro;

use App\_helpers\Util;
use Illuminate\Database\Eloquent\Model;

class Livro extends Model
{
    protected $fillable = ['nm_livro', 'nm_autor', 'nm_editora',
                           'num_paginas', 'dt_lancamento', 'categoria_id'];


    public static function store($data)
    {
        return Livro::create([
            'nm_livro' => $data->nm_livro,
            'nm_autor' => $data->nm_autor,
            'nm_editora' => $data->nm_editora,
            'num_paginas' => $data->num_paginas,
            'dt_lancamento' => Util::convertDate($data->dt_lancamento),
            'categoria_id' => $data->categoria_id
        ]);
    }

    public static function patch($data, $id)
    {
        $livro = Livro::findOrFail($id);
        $livro->nm_livro = $data->nm_livro;
        $livro->nm_autor = $data->nm_autor;
        $livro->nm_editora = $data->nm_editora;
        $livro->num_paginas = $data->num_paginas;
        $livro->dt_lancamento = Util::convertDate($data->dt_lancamento);
        $livro->categoria_id = $data->categoria_id;
        $livro->save();
        return $livro;
    }

}
