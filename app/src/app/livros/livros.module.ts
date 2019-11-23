import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {LivroCadastroComponent} from './livro-cadastro/livro-cadastro.component';
import {LivrosGridComponent} from './livros-grid/livros-grid.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    LivroCadastroComponent,
    LivrosGridComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    LivroCadastroComponent,
    LivrosGridComponent
  ]
})
export class LivrosModule {
}
