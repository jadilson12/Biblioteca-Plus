import {Component, OnInit} from '@angular/core';
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons';
import {LivroService} from '../livro.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-livros-grid',
  templateUrl: './livros-grid.component.html',
  styleUrls: ['./livros-grid.component.css']
})
export class LivrosGridComponent implements OnInit {
  faTrash = faTrash;
  faEdit = faEdit;

  current_page: number;
  livros: [{
    id: number,
    nm_livro: string,
    nm_autor: string,
    nm_editora: string,
    dt_lancamento: any,
    num_paginas: number,
    nm_categoria: string
  }];
  from: number;
  last_page: number;
  next_page_url: string;
  path: string;
  to: number;
  total: any [];

  constructor(
    private livroServices: LivroService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit() {
    this.getLivro(1);
  }

  setPage(page: number) {
    this.getLivro(page)
  }

  getLivro(page: number) {
    console.log(page)
    this.livroServices.getLivro(page)
      .subscribe(resp => {
        this.current_page = resp.current_page;
        this.livros = resp.data;
        this.last_page = resp.last_page;
        this.next_page_url = resp.next_page_url;
        this.total = [...Array(Math.floor(resp.last_page)).keys()];
      });
  }

  deleteLivro(id) {
    this.livroServices.deleteLivro(id)
      .subscribe(() => {
          this.getLivro(this.current_page);
          this.toastr.success('Excluido com sucesso!', 'Livro');
        },
        resp => {
          this.toastr.error(resp.error.text, 'Livro');
        });
  }
}
