import { Component, OnInit } from '@angular/core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-usuarios-grid',
  templateUrl: './usuarios-grid.component.html',
  styleUrls: ['./usuarios-grid.component.css']
})
export class UsuariosGridComponent implements OnInit {
  faTrash = faTrash;
  faEdit = faEdit;
  usuarios = [
    {
      nome: 'Jose',
      email: 'jose@gmail.com',
    },
    {
      nome: 'Pedro',
      email: 'pedro@gmail.com',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
