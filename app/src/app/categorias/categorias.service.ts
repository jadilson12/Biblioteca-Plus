import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) {
  }

  baseUrl: string = 'http://localhost:8000/api/v1/categorias';

  getCategoria(): Observable<any>  {
    return this.http.get(this.baseUrl);
  }

  setCategoria(categoria): Observable<any>  {
    return this.http.post(this.baseUrl, categoria);
  }

  deleteCategoria(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateCategoria(categoria) {
    return this.http.put(this.baseUrl + '/' + categoria.id, categoria);
  }

  showCategoria(id) {
    return this.http.get(this.baseUrl + '/' + id);
  }
}
