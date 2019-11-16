import {Component, OnInit} from '@angular/core';
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons';
import {CategoriasService} from "../categorias.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-categorias-grid',
  templateUrl: './categorias-grid.component.html',
  styleUrls: ['./categorias-grid.component.css']
})
export class CategoriasGridComponent implements OnInit {
  faTrash = faTrash;
  faEdit = faEdit;
  categorias: {};

  constructor(
    private categoriaServices: CategoriasService,
    private toastr: ToastrService
  ) {}

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
          this.getCategoria();
          this.toastr.success('Excluido com sucesso!', 'Categoria');
        },
        resp => {
          this.toastr.error(resp.error.text, 'Categoria');
        })
  }
}
