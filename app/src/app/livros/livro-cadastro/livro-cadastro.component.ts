import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-livro-cadastro',
  templateUrl: './livro-cadastro.component.html',
  styleUrls: ['./livro-cadastro.component.css']
})
export class LivroCadastroComponent implements OnInit {

  setSalvar(form: NgForm) {
    console.log(form.value);
    console.log(form.valid);
  }
  constructor() { }

  ngOnInit() {
  }

}
