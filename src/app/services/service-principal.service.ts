import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicePrincipalService {
  url :string="http://127.0.0.1:8000";
   
   constructor(private http: HttpClient) { }
 
   getUsuarios() {
     return this.http.get<any>(this.url + "/api/Users/getList");
   }
}
