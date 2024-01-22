import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export abstract class LoginService {
  abstract login(username: string, password: string): Observable<any>
}
