import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  private baseUrl = environment.Url_base ;

  constructor(private http: HttpClient) { }

    getAllProfil() {
       return this.http.get(`${this.baseUrl}/admin/profils`);
    }

}
