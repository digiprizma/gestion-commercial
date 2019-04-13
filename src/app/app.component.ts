import {Component, OnInit} from '@angular/core';
import {LoginService} from './login/service/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  title = 'gestion-commerciale';

  constructor(private loginService:LoginService,private router:Router){}

  ngOnInit(): void {
    this.loginService.loadToken();
    console.log("routin rul"+this.router.getCurrentNavigation());
    if(!this.isAuthenticated()){
      console.log("routin rul"+this.router.getCurrentNavigation());
      this.router.navigateByUrl("login");
    }
  }

  isAdmin(){
    return this.loginService.isAdmin();
  }

  isUser(){
    return this.loginService.isUser();
  }

  isAuthenticated(){
    return this.loginService.isAuthenticated();
  }

  logOut() {
    return this.loginService.logOut();
  }
}
