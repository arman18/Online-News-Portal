import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email:string;
  public password:string;
  public isAdmin:boolean = false;
  public submitClicked:boolean = false;
  public showErrMessage = false;
  constructor(private loginService:LoginService) { 
  }

  ngOnInit(): void {
    
  }
  login(loginForm){
    this.submitClicked = true;
    if(loginForm.valid){
      this.loginService.login(this.email,this.password,this.isAdmin)
        this.showErrMessage =true;
    }
    
  }

}
