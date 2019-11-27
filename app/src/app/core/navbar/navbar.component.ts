import {Component, OnInit} from '@angular/core';
import {faBars, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { CanActivate } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private faBars = faBars;
  private faArrowLeft = faArrowLeft;
  private isMenu: boolean;
  private username: string;

  constructor() {

  }

  ngOnInit() {
    this.isMenu = true;

    setInterval(() => {
      this.username = window.sessionStorage.getItem('userName');
      this.authOn();
    }, 1000)
  }

  private authOn() {
    let logado = true;
    if (!this.username) logado = false;
    return logado
  }


}
