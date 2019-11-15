import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriaCadastroComponent} from './categoria-cadastro/categoria-cadastro.component';
import {CategoriasGridComponent} from './categorias-grid/categorias-grid.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CategoriasService} from './categorias.service';

@NgModule({
  declarations: [
    CategoriaCadastroComponent,
    CategoriasGridComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    CategoriaCadastroComponent,
    CategoriasGridComponent
  ],
  providers: [CategoriasService]
})
export class CategoriasModule {
}
