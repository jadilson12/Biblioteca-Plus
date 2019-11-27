import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterModule} from '@angular/router';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    LoginComponent,
    NavbarComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    FooterComponent,
    LoginComponent,
    NavbarComponent,
  ],
})
export class CoreModule { }
