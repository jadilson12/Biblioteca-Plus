<?php

namespace App\Models\Categoria;

use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    protected $fillable = ['nm_categoria'];

    public static function store($data)
    {
        return Categoria::create([
            'nm_categoria' => $data->nm_categoria
        ]);
    }

    public static function patch($data, $id)
    {
        $categoria = Categoria::find($id);
        $categoria->nm_categoria = $data->nm_categoria;
        $categoria->save();
        return $categoria;
    }
}
