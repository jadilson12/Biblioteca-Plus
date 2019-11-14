<?php

use Illuminate\Support\Facades\Route;

Route::group(['namespace' => 'Categoria'], function (){
    Route::get('/categorias', 'CategoriaController@get');
    Route::post('/categoria', 'CategoriaController@post');
    Route::get('/categoria/{id}', 'CategoriaController@show');
    Route::put('/categoria/{id}', 'CategoriaController@put');
    Route::delete('/categoria/{id}', 'CategoriaController@delete');
});

Route::group(['namespace' => 'Livro'], function (){
    Route::get('/livros', 'LivroController@get');
    Route::post('/livro', 'LivroController@post');
    Route::get('/livro/{id}', 'LivroController@show');
    Route::put('/livro/{id}', 'LivroController@put');
    Route::delete('/livro/{id}', 'LivroController@delete');
});
