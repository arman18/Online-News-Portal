import { Injectable } from '@angular/core';
import {User} from '../models/user';
import { Observable, observable } from 'rxjs';
import { UrlSerializer } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginInfoService {
  public currentUser:User=new User();
  private logged:boolean = false;
  constructor() { 
  }
  store(user:User,logged:boolean){
    this.currentUser =  user;
    this.logged = logged;
  }
  getName():string{
    if(this.isLogged())
      return  this.currentUser.userName;
    return "";

  }

  isLogged():boolean{
    return this.logged;
  }

  isAdmin():boolean{
    //console.log(this.isLogged());
    if(this.isLogged())
      return  this.currentUser.isAdmin;
    return false;
  }
}
