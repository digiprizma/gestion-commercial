import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  title = 'gestion-commerciale';

  constructor(private loginService:LoginService){}

  ngOnInit(): void {
    this.loginService.loadToken();
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
