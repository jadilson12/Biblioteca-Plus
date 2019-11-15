import {Component, OnInit} from '@angular/core';
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons';
import {LivroService} from "../livro.service";

@Component({
  selector: 'app-livros-grid',
  templateUrl: './livros-grid.component.html',
  styleUrls: ['./livros-grid.component.css']
})
export class LivrosGridComponent implements OnInit {
  faTrash = faTrash;
  faEdit = faEdit;
  livros = [];

  constructor(private livroServices: LivroService,) {
  }

  ngOnInit() {
    this.getLivro()
  }

  getLivro() {
    this.livroServices.getLivro()
      .subscribe(data => this.livros = data)
  }

  deleteLivro(id) {
    this.livroServices.deleteLivro(id)
      .subscribe(() => {
          this.getLivro()
        },
        res => console.log(res)
      )
  }
}
