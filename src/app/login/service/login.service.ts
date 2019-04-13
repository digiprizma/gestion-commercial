import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  host2:string="http://localhost:8080";
  jwt:string;
  username:string;
  roles:Array<String>;

  constructor(private http:HttpClient) { }

  login(data){
    return this.http.post(this.host2+"/login", data, {observe:'response'});
  }

  saveToken(jwt: string) {
    localStorage.setItem('token', jwt);
    this.jwt = jwt;
    this.parseJWT();
  }
    parseJWT() {
      let jwtHelper = new JwtHelperService();
      this.username = jwtHelper.decodeToken(this.jwt).obj;
      this.roles = this.username = jwtHelper.decodeToken(this.jwt).roles;
    }


    isAdmin() {
      return this.roles.indexOf('ADMIN') >= 0;
    }

     isUser() {
       return this.roles.indexOf('USER') >= 0;
     }

     isAuthenticated(){
     return this.roles!=undefined;
     }

  loadToken() {
    this.jwt=localStorage.getItem('token');
    if(this.jwt != null) {
      this.parseJWT();
    }
  }

  logOut() {
    localStorage.removeItem('token');
    this.initParams();
  }

  initParams(){
    this.jwt=undefined;
    this.username=undefined;
    this.roles=undefined;
  }
}
