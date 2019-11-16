import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) {
  }

  baseUrl: string = 'http://localhost:8000/api/v1/users';

  getUsuario() {
    return this.http.get(this.baseUrl)
  }

  setUsuario(usuario: any) {
    return this.http.post(this.baseUrl, usuario)
  }

  deleteUsuario(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateUsuario(usuario) {
    return this.http.put(this.baseUrl + '/' + usuario.id, usuario);
  }

  showUsuario(id) {
    return this.http.get(this.baseUrl + '/' + id);
  }
}
