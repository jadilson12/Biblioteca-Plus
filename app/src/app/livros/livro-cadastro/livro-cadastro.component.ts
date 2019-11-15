import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {LivroService} from "../livro.service";
import {CategoriasService} from "../../categorias/categorias.service";

@Component({
  selector: 'app-livro-cadastro',
  templateUrl: './livro-cadastro.component.html',
  styleUrls: ['./livro-cadastro.component.css']
})
export class LivroCadastroComponent implements OnInit {
  private livro = {
    id: '',
    nm_livro: '',
    nm_autor: '',
    nm_editora: '',
    num_paginas: '',
    dt_lancamento: '',
    categoria_id: ''
  };
  private categorias = [];

  constructor(
    private livroServices: LivroService,
    private route: ActivatedRoute,
    private router: Router,
    private categoriaService: CategoriasService
  ) {
  }

  ngOnInit() {
    const idLivro = this.route.snapshot.params['id'];
    idLivro && this.carregarLivro(idLivro)

    this.categoriaService.getCategoria()
      .subscribe(data => this.categorias = data)
  }

  get editando() {
    return Boolean(this.livro.id)
  }

  private adicionar(livro: NgForm) {
    this.livroServices.setLivro(livro.value)
      .subscribe(resp => {
          this.router.navigate(['/livros', resp.id])
        },
        resp => {
          console.error(resp)
        })
  }

  private carregarLivro(idLivro: number) {
    this.livroServices.showLivro(idLivro)
      .subscribe(livro => {
        // this.livro = Object.assign(this.livro, livro);
        this.livro = Object.assign(this.livro, livro);
        console.log(this.livro)
      })
  }

  private salvar(livroForm: NgForm) {
    if (this.editando) {
      this.atualizar()
    } else {
      this.adicionar(livroForm)
    }
  }

  private atualizar() {
    this.livroServices.updateLivro(this.livro)
      .subscribe(resp => {
          this.livro = Object.assign(this.livro, resp)
        },
        resp => {
          console.error(resp)
        })
  }
}
