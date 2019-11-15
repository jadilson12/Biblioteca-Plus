import { Component, OnInit } from '@angular/core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import {UsuarioService} from "../usuario.service";
@Component({
  selector: 'app-usuarios-grid',
  templateUrl: './usuarios-grid.component.html',
  styleUrls: ['./usuarios-grid.component.css']
})
export class UsuariosGridComponent implements OnInit {
  faTrash = faTrash;
  faEdit = faEdit;
  usuarios = [];
  constructor(private usuarioServices: UsuarioService,) { }

  ngOnInit() {
    this.getUsuario()
  }

  getUsuario() {
    this.usuarioServices.getUsuario()
      .subscribe(data => this.usuarios = data)
  }

  deleteUsuario(id) {
    this.usuarioServices.deleteUsuario(id)
      .subscribe(() => {
          this.getUsuario()
        },
        res => console.log(res)
      )
  }
}
