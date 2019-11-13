<?php

use Illuminate\Support\Facades\Route;

Route::group(['namespace' => 'Categoria'], function (){
    Route::get('/categorias', 'CategoriaController@get');
    Route::post('/categoria', 'CategoriaController@post');
    Route::get('/categoria/{id}', 'CategoriaController@show');
    Route::put('/categoria/{id}', 'CategoriaController@put');
    Route::delete('/categoria/{id}', 'CategoriaController@delete');
});
