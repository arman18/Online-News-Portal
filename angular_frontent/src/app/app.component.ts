import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginInfoService} from './services/login-info.service'
import {NewsService} from './services/news.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'News paper';
  search = "";
  constructor(public loginInfoService:LoginInfoService,private newsService:NewsService,private router:Router){}
  ngOnInit():void{
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
  };
  }
  searchNews(){
    this.newsService.searchText = this.search;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(["/"]);
  }
}
