import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import {NewsService} from './services/news.service';
import {LoginService} from './services/login.service';
import {AccountManagementService} from './services/account-management.service';
import {LoginInfoService} from './services/login-info.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateComponent } from './create/create.component'
import {AppRoutesModule} from './app-routes.module';
import { ModifyComponent } from './modify/modify.component'
import { AuthGuard } from './guards/auth.guard'
import {EditAccountComponent} from './editAccount/editAccount.component'

@NgModule({
  declarations: [
    AppComponent,
    NewsItemComponent,
    NewsListComponent,
    NewsDetailsComponent,
    LoginComponent,
    RegisterComponent,
    CreateComponent,
    ModifyComponent,
    EditAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NewsService,
            LoginService,
            LoginInfoService,
          AccountManagementService,
        AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
