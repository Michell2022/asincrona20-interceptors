import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    console.log('Esto verificara si todo va bien');

    const newCopia = req.clone({setHeaders:{
      Authorization: 'probando 888888888'
    }})
    return next.handle(newCopia);
  }
  constructor() { }
}
