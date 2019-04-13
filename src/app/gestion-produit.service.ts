import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login/service/login.service';

@Injectable({
  providedIn: 'root'
})
export class GestionProduitService {

  uri:string="http://localhost:8087";
  constructor(private http:HttpClient,private loginService:LoginService) { }

  getAllCategories(){
  return  this.http.get(this.uri+"/categories");
  }

  getRessource(url){
  return  this.http.get(url);
  }

  deleteRessource(url) {
    let header = new HttpHeaders({'Authorization':'Bearer '+this.loginService.jwt})
    return this.http.delete(url,{headers:header});
  }

  postRessource(url, data) {
    let header = new HttpHeaders({'Authorization':'Bearer '+this.loginService.jwt})
    return this.http.post(url,data,{headers:header});
  }

  putRessource(url, data) {
    let header = new HttpHeaders({'Authorization':'Bearer '+this.loginService.jwt})
    return this.http.put(url,data,{headers:header});
  }

  patchRessource(url, data) {
    let header = new HttpHeaders({'Authorization':'Bearer '+this.loginService.jwt})
    return this.http.patch(url,data,{headers:header});
  }
}
