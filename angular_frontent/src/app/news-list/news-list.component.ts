import { Component, OnInit } from '@angular/core';
import { News } from '../models/news';
import {NewsService} from '../services/news.service';
import {LoginInfoService} from '../services/login-info.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  public newses: News[];
  constructor(private router:Router,public loginInfoService:LoginInfoService,private newsService:NewsService ) { }

  ngOnInit(): void {
    
    this.newsService.getNewses().subscribe(res=>{
      this.newses = res;
      if(this.newsService.searchText!=""){
        this.newses = this.newses.filter(news=>{
          return news.title.toLowerCase().includes(this.newsService.searchText.toLowerCase());
        });
      }
    });
    
  }

  deleteNews(id:number){
    this.newsService.deleteNews(id).subscribe(res=>{
      this.reset();
    });
  }
  reset(){
    this.newsService.getNewses().subscribe(res=>{
      this.newses = res;
    });
  }
}
