import { Component, OnInit } from '@angular/core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import {UsuarioService} from "../usuario.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-usuarios-grid',
  templateUrl: './usuarios-grid.component.html',
  styleUrls: ['./usuarios-grid.component.css']
})
export class UsuariosGridComponent implements OnInit {
  faTrash = faTrash;
  faEdit = faEdit;
  usuarios: {};
  constructor(
    private usuarioServices: UsuarioService,
    private toastr: ToastrService
  ) { }

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
          this.toastr.success('Excluido com sucesso!', 'Usuário');
        },
        resp => {
          this.toastr.error(resp.error.text, 'Usuário');
        })
  }
}
