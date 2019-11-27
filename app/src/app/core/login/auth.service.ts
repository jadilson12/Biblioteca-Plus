import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'http://localhost:8000/api/v1';

  constructor(private http: HttpClient) {
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, user);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, null);
  }
}
