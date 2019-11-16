import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CategoriasService} from '../categorias.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-categoria-cadastro',
  templateUrl: './categoria-cadastro.component.html',
  styleUrls: ['./categoria-cadastro.component.css']
})
export class CategoriaCadastroComponent implements OnInit {
  private categoria = {id: '', nm_categoria: ''};

  ngOnInit() {
    const idCategoria = this.route.snapshot.params.id;
    idCategoria && this.carregarCategoria(idCategoria);
  }

  constructor(
    private categoriaServices: CategoriasService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
  }

  get editando() {
    return Boolean(this.categoria.id);
  }

  private adicionar(categoria: NgForm) {
    this.categoriaServices.setCategoria(categoria.value)
      .subscribe(resp => {
          this.router.navigate(['/categorias', resp.id]);
          this.toastr.success('Criada com sucesso!', 'Categoria');
        },
        resp => {
          this.toastr.error(resp.error.text, 'Categoria');
        });
  }

  private carregarCategoria(idCategoria: number) {
    this.categoriaServices.showCategoria(idCategoria)
      .subscribe(categoria => {
        this.categoria = Object.assign(this.categoria, categoria);
      });
  }

  private salvar(categoriaForm: NgForm) {
    if (this.editando) {
      this.atualizar();
    } else {
      this.adicionar(categoriaForm);
    }
  }

  private atualizar() {
    this.categoriaServices.updateCategoria(this.categoria)
      .subscribe(resp => {
          this.categoria = Object.assign(this.categoria, resp);
          this.toastr.success('Criada com sucesso!', 'Categoria');
        },
        resp => {
          this.toastr.error(resp.error.text, 'Categoria');
        });
  }
}
