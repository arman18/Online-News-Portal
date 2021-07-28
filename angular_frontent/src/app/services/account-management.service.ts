import { Injectable } from '@angular/core';
import { LoginInfo } from '../models/LoginInfo';
import {User} from '../models/user';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AccountManagementService {
  private apiUrl = "http://localhost:5002/api/User/";
  private users:User[];
  constructor(private http:HttpClient) { 
  }

  getUserByMailPass(email:string,password:string,admin:boolean):Observable<User>{
    return this.http.post<User>(this.apiUrl+'Login',{Email:email,Password:password,IsAdmin:admin});
  }
  getNewId():number{
    return this.users.length+1;
  }
  addUser(user:User):Observable<User>{
    // if(!this.users.find((each)=>each.Email==user.Email)){
    //   this.users.push(user);
    // }
    return this.http.post<User>(this.apiUrl+'Add',user);
  }
  updateUser(user:User):Observable<User>{
    return this.http.post<User>(this.apiUrl+"Update",user);
  }
  getUserById(id:number):Observable<User>{
    return this.http.get<User>(this.apiUrl+id);
  }

}
