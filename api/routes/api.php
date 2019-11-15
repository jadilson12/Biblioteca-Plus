<?php

use Illuminate\Support\Facades\Route;

Route::group(['namespace' => 'Categoria'], function (){
    Route::get('/categorias', 'CategoriaController@get');
    Route::post('/categorias', 'CategoriaController@post');
    Route::get('/categorias/{id}', 'CategoriaController@show');
    Route::put('/categorias/{id}', 'CategoriaController@put');
    Route::delete('/categorias/{id}', 'CategoriaController@delete');
});

Route::group(['namespace' => 'Livro'], function (){
    Route::get('/livros', 'LivroController@get');
    Route::post('/livros', 'LivroController@post');
    Route::get('/livros/{id}', 'LivroController@show');
    Route::put('/livros/{id}', 'LivroController@put');
    Route::delete('/livros/{id}', 'LivroController@delete');
});

Route::group(['namespace' => 'User'], function (){
    Route::get('/users', 'UserController@get');
    Route::post('/users', 'UserController@post');
    Route::get('/users/{id}', 'UserController@show');
    Route::put('/users/{id}', 'UserController@put');
    Route::delete('/users/{id}', 'UserController@delete');
});
