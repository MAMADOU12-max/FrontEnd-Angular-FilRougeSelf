import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private UrlEnv = environment.Url_base ;

  tokenDecoded: string ;
  //  teams$ = this.http.get('UrlEnv/users');
  helper = new JwtHelperService() ;

  constructor(private http: HttpClient, private router: Router) {}


  // tslint:disable-next-line:typedef
  Authentification(password: string, username: string) {
     return  this.http.post(this.UrlEnv+'/login',{
         username, password
      }).pipe(
            map((response: any) => {
                this.tokenDecoded = this.helper.decodeToken(response.token) ;
                console.log(this.tokenDecoded) ;
                localStorage.setItem('token', response.token) ;
                // console.log(this.tokenDecoded['roles']) ;
              // tslint:disable-next-line:triple-equals
                if (this.tokenDecoded['roles'] == 'ROLE_FORMATEUR') {
                  this.router.navigate(['formateur']) ;
                } else if (this.tokenDecoded['roles'] == 'ROLE_ADMIN') {
                  this.router.navigate(['admin']) ;
                }else if (this.tokenDecoded['roles'] == 'ROLE_CM') {
                  this.router.navigate(['cm']) ;
                }else {
                  console.log('not matched data') ;
                }
            })
     );
  }


  // tslint:disable-next-line:typedef
  getToken(key: string) {
     const token =  localStorage.getItem('token') ;
     if (token !== 'undefined') {
         return token ;
      } else {
         return null ;
      }
  }

}
