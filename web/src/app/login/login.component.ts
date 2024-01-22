import { Component, OnInit } from '@angular/core';
import {LoginService} from "./service/login.service";
import {Router} from "@angular/router";
import {DummyLoginService} from "./service/dummy-login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

  constructor(
    private _loginService: DummyLoginService,
    private _router: Router
  ) { }

  ngOnInit(): void {

  }

  login() {
    this._loginService.login(this.username, this.password)
      .subscribe(() => {
        this._router.navigate(["admin", "pages"]).then(() => {});
      })
  }
}
