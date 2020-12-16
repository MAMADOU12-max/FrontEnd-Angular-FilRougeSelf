// src/app/auth/token.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
// @ts-ignore
import { Observable } from 'rxjs/Observable';
import {UserService} from '../../Services/user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private userService: UserService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // @ts-ignore
       const token = this.userService.getToken() ;
       if (token) {
          // console.log('cool') ;
          // @ts-ignore
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
        });
      }
       return next.handle(request);
    }
}
