import { Component, OnInit } from '@angular/core';
import {AuthService} from "./auth.service";

import { User } from '../../model/user';
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User = new User();

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login(): void {
    this.authService.login(this.user)
      .subscribe(res =>{
        window.sessionStorage.setItem("userName",res.user.name);
        window.sessionStorage.setItem("token",res.access_token);
        this.router.navigate(['/']);
        this.toastr.success('Login realizado com sucesso');
      },
        resp => {
          this.toastr.error(resp.message);
    });
  }
}
