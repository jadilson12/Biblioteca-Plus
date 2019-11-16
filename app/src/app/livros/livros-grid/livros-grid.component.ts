import {Component, OnInit} from '@angular/core';
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons';
import {LivroService} from '../livro.service';
import {ToastrService} from 'ngx-toastr';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-livros-grid',
  templateUrl: './livros-grid.component.html',
  styleUrls: ['./livros-grid.component.css']
})
export class LivrosGridComponent implements OnInit {
  faTrash = faTrash;
  faEdit = faEdit;
  livros: Observable<any[]>;

  constructor(
    private livroServices: LivroService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit() {
    this.getLivro();
  }

  getLivro() {
    this.livroServices.getLivro()
      .subscribe(data => this.livros = data);
  }

  deleteLivro(id) {
    this.livroServices.deleteLivro(id)
      .subscribe(() => {
          this.getLivro()
          this.toastr.success('Excluido com sucesso!', 'Livro');
        },
        resp => {
          this.toastr.error(resp.error.text, 'Livro');
        });
  }
}
