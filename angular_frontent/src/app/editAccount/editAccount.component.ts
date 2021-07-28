import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router ,ActivatedRoute} from '@angular/router';
import {AccountManagementService} from '../services/account-management.service';
import { LoginInfoService } from '../services/login-info.service';

@Component({
    selector: 'acc-edit',
    templateUrl: './editAccount.component.html',
    styleUrls: ['./editAccount.component.css']
  })

  export class EditAccountComponent implements OnInit{
    user:User = new User();
    agree:boolean;
    pass:string;
    rePass:string;
    OldPass:string;
    failed:boolean = false;
    userId:any;
    constructor(private loginfoService:LoginInfoService,private route: ActivatedRoute,private accountManager:AccountManagementService,private router:Router){

    }

    ngOnInit(): void {
        //console.log("okk");
        this.userId = this.route.snapshot.paramMap.get('id');
        this.accountManager.getUserById(Number(this.userId)).subscribe(
          usr=>{
            this.user = usr;
              
            });
    }

    submitEditInfo(createForm){
        if(createForm.valid){
            //let id = this.accountManager.getNewId();
            this.user.password = this.pass;
            this.accountManager.updateUser(this.user).subscribe(res=>{
              if(res) {
                this.loginfoService.store(res,true);
                this.router.navigate(['']);
              }
              else 
                this.failed = true;
            });
        }
    }
}