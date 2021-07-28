import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CreateComponent} from './create/create.component';
import {ModifyComponent} from './modify/modify.component';
import {NewsListComponent} from './news-list/news-list.component';
import {NewsDetailsComponent} from './news-details/news-details.component'
import {AuthGuard} from './guards/auth.guard'
import { EditAccountComponent } from './editAccount/editAccount.component';

const appRoutes: Routes = [
  { path: '', component: NewsListComponent,pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'news/create', component: CreateComponent ,canActivate:[AuthGuard]},
  { path: 'news/modify/:id', component: ModifyComponent,canActivate:[AuthGuard] },
  { path: 'news/details/:id', component: NewsDetailsComponent },
  { path: 'user/edit/:id', component: EditAccountComponent },
  { path: '**', redirectTo: '/' }
 ];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }
