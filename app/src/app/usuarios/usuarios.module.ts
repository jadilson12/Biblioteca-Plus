import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsuarioCadastroComponent} from './usuario-cadastro/usuario-cadastro.component';
import {UsuariosGridComponent} from './usuarios-grid/usuarios-grid.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    UsuarioCadastroComponent,
    UsuariosGridComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    UsuariosGridComponent,
    UsuarioCadastroComponent
  ]
})
export class UsuariosModule { }
