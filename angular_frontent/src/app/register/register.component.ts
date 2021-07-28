import { Component, OnInit } from '@angular/core';
import {User} from '../models/user'
import { Router } from '@angular/router';
import {AccountManagementService} from '../services/account-management.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user:User = new User();
  agree:boolean;
  pass:string;
  rePass:string;
  failed:boolean = false;
  constructor(private accountManager:AccountManagementService,private router:Router) {
      // this.user ={
      //   dateOfBirth:"",
      //   email:"",
      //   isAdmin:false,
      //   fullName:"",
      //   nationality:"",
      //   password:"",
      //   userName:""
      // }
   }

  ngOnInit(): void {
  }
  register(createForm){
    if(createForm.valid){
      //let id = this.accountManager.getNewId();
      this.user.password = this.pass;
      this.accountManager.addUser(this.user).subscribe(res=>{
        if(res)this.router.navigate(['login']);
        else 
          this.failed = true;
      });
      //console.log(this.user);
      
    }
      
  }

}
