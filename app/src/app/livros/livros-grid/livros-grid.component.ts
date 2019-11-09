import { Component, OnInit } from '@angular/core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-livros-grid',
  templateUrl: './livros-grid.component.html',
  styleUrls: ['./livros-grid.component.css']
})
export class LivrosGridComponent implements OnInit {
  faTrash = faTrash;
  faEdit = faEdit;
  livros = [
    {
      nome: 'O Rei leaõ',
      autor: 'José carlos',
      editora: 'Editora plus',
      paginas: '200',
      lancamento: '12/12/2019'
    },
    {
      nome: 'O Rei leaõ',
      autor: 'José carlos',
      editora: 'Editora plus',
      paginas: '200',
      lancamento: '12/12/2019'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
