import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoriaCadastroComponent} from './categoria-cadastro/categoria-cadastro.component';
import {CategoriasGridComponent} from './categorias-grid/categorias-grid.component';
import {LivrosGridComponent} from './livros-grid/livros-grid.component';
import {LivroCadastroComponent} from './livro-cadastro/livro-cadastro.component';
import {UsuariosGridComponent} from './usuarios-grid/usuarios-grid.component';
import {UsuarioCadastroComponent} from './usuario-cadastro/usuario-cadastro.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'categorias', component: CategoriasGridComponent},
  {path: 'categoria/novo', component: CategoriaCadastroComponent},
  {path: 'livros', component: LivrosGridComponent},
  {path: 'livro/novo', component: LivroCadastroComponent},
  {path: 'usuarios', component: UsuariosGridComponent},
  {path: 'usuario/novo', component: UsuarioCadastroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
