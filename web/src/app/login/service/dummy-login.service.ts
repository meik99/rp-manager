import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {LoginService} from "./login.service";
import {Credentials} from "./Credentials";

@Injectable({
  providedIn: 'root'
})
export class DummyLoginService extends LoginService {
  private _credentials: Credentials = new Credentials();

  login(username: string, password: string): Observable<Credentials> {
    this._credentials = new Credentials(username, password);

    return of(this._credentials);
  }

  get credentials(): Credentials {
    return this._credentials;
  }

  constructor() {
    super();
  }
}
