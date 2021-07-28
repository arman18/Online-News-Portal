import { Injectable } from '@angular/core';
import {LoginInfoService} from './login-info.service'
import {AccountManagementService} from './account-management.service'
import { Router } from '@angular/router';
import {User} from '../models/user'
import { compileComponentFromMetadata } from '@angular/compiler';
//import { LoginComponent } from '../login/login/login.component';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _userName:string = "admin";
  private _password:string = "admin";
  private _isAdmin:boolean = true;
  constructor(private router: Router,private loginInfoService:LoginInfoService,private accountService:AccountManagementService) { }

  login(email:string , pass:string,isAdmin:boolean):void{
    //console.log("i am here");
    this.accountService.getUserByMailPass(email,pass,isAdmin).subscribe(
      (data) => {
        if(data) {
          this.loginInfoService.store(data,true);
          this.router.navigate(['']);
        }
      });
  }

  logout():boolean{
    this.loginInfoService.store(null,false);
    return true;
  }
  
}