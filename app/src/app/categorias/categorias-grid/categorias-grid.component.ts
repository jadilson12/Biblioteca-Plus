import {Component, OnInit} from '@angular/core';
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons';
import {CategoriasService} from "../categorias.service";

@Component({
  selector: 'app-categorias-grid',
  templateUrl: './categorias-grid.component.html',
  styleUrls: ['./categorias-grid.component.css']
})
export class CategoriasGridComponent implements OnInit {
  faTrash = faTrash;
  faEdit = faEdit;
  categorias = [];

  constructor(private categoriaServices: CategoriasService,) {}

  ngOnInit() {
    this.getCategoria()
  }

  getCategoria() {
    this.categoriaServices.getCategoria()
      .subscribe(data => this.categorias = data)
  }

  deleteCategoria(id) {
    this.categoriaServices.deleteCategoria(id)
      .subscribe(() => {
          this.getCategoria()
        },
        res => console.log(res)
      )
  }
}
