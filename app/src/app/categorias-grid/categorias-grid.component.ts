import { Component, OnInit } from '@angular/core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-categorias-grid',
  templateUrl: './categorias-grid.component.html',
  styleUrls: ['./categorias-grid.component.css']
})
export class CategoriasGridComponent implements OnInit {
  faTrash = faTrash;
  faEdit = faEdit;
  categorias = [
    {nome: 'Informatica'},
    {nome: 'Medicinas'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
