import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService  implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = window.sessionStorage.getItem('token');
    request = request.clone({
      setHeaders: {
        'Accept'       : 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    return next.handle(request);
  }
}
