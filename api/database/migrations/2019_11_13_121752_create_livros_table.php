<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLivrosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('livros', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nm_livro');
            $table->string('nm_autor');
            $table->string('nm_editora');
            $table->integer('num_paginas');
            $table->date('dt_lancamento');

            $table->unsignedBigInteger('categoria_id');
            $table->foreign('categoria_id')
                ->references('id')->on('categorias')
                ->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('livros');
    }
}
