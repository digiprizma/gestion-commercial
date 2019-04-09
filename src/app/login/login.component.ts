import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit() {
  }

  onLogin(data){
    console.log(data);
    this.loginService.login(data).subscribe(response=>{
      let jwt =response.headers.get('Authorization');
      this.loginService.saveToken(jwt);
      this.router.navigateByUrl("/");
    },err=>{
      console.log(err);
    })
  }

  isAuthenticated(){
    return this.loginService.isAuthenticated();
  }

}
