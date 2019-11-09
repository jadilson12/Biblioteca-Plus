import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  setSalvar(form: NgForm) {
    console.log(form.value);
    console.log(form.valid);
  }
  constructor() { }

  ngOnInit() {
  }

}
