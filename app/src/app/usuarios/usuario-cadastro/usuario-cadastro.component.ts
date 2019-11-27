import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UsuarioService} from '../usuario.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {
  usuario = {
    id: '',
    name: '',
    email: '',
    password: '',
  };

  constructor(
    private usuarioServices: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
  }

  ngOnInit() {
    const idUsuario = this.route.snapshot.params.id;
    idUsuario && this.carregarUsuario(idUsuario);
  }

  get editando() {
    return Boolean(this.usuario.id);
  }

  private adicionar(usuario: NgForm) {
    this.usuarioServices.setUsuario(usuario.value)
      .subscribe(resp => {
          this.router.navigate(['/usuarios', resp.user.id]);
          this.toastr.success('Criada com sucesso!', 'Usuário');
        },
        resp => {
          this.toastr.error(resp.error.text, 'Usuário');
        });
  }

  private carregarUsuario(idUsuario: number) {
    this.usuarioServices.showUsuario(idUsuario)
      .subscribe(usuario => {
        this.usuario = Object.assign(this.usuario, usuario);
      });
  }

  private salvar(usuarioForm: NgForm) {
    if (this.editando) {
      this.atualizar();
    } else {
      this.adicionar(usuarioForm);
    }
  }

  private atualizar() {
    this.usuarioServices.updateUsuario(this.usuario)
      .subscribe(resp => {
        this.usuario = Object.assign(this.usuario, resp);
        this.toastr.success('Atualizado com sucesso!', 'Usuário');
        },
        resp => {
          this.toastr.error(resp.error.text, 'Usuário');
        });
  }
}
