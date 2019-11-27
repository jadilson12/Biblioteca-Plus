import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoriaCadastroComponent} from './categorias/categoria-cadastro/categoria-cadastro.component';
import {CategoriasGridComponent} from './categorias/categorias-grid/categorias-grid.component';
import {LivrosGridComponent} from './livros/livros-grid/livros-grid.component';
import {LivroCadastroComponent} from './livros/livro-cadastro/livro-cadastro.component';
import {UsuariosGridComponent} from './usuarios/usuarios-grid/usuarios-grid.component';
import {UsuarioCadastroComponent} from './usuarios/usuario-cadastro/usuario-cadastro.component';
import {HomeComponent} from './core/home/home.component';
import {LoginComponent} from './core/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},
  {path: 'categorias', component: CategoriasGridComponent,},
  {path: 'categorias/novo', component: CategoriaCadastroComponent},
  {path: 'categorias/:id', component: CategoriaCadastroComponent},
  {path: 'livros', component: LivrosGridComponent},
  {path: 'livros/novo', component: LivroCadastroComponent},
  {path: 'livros/:id', component: LivroCadastroComponent},
  {path: 'usuarios', component: UsuariosGridComponent},
  {path: 'usuarios/novo', component: UsuarioCadastroComponent},
  {path: 'usuarios/:id', component: UsuarioCadastroComponent},
  {path: 'logout', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
