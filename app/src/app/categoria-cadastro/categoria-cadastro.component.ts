import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-categoria-cadastro',
  templateUrl: './categoria-cadastro.component.html',
  styleUrls: ['./categoria-cadastro.component.css']
})
export class CategoriaCadastroComponent implements OnInit {

  setSalvar(form: NgForm) {
    console.log(form.value);
    console.log(form.valid);
  }
  constructor() { }

  ngOnInit() {
  }

}
