import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class LivroService {

  constructor(private http: HttpClient) {
  }

  baseUrl = 'http://localhost:8000/api/v1/livros';

  getLivro(): Observable<any>  {
    return this.http.get(this.baseUrl);
  }

  setLivro(livro): Observable<any>  {
    return this.http.post(this.baseUrl, livro);
  }

  deleteLivro(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateLivro(livro) {
    return this.http.put(this.baseUrl + '/' + livro.id, livro);
  }

  showLivro(id) {
    return this.http.get(this.baseUrl + '/' + id);
  }
}
