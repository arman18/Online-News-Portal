import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {News} from '../models/news';
import {NewsService} from '../services/news.service';
import {LoginInfoService} from '../services/login-info.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  news: News = new News();
  public comment:string = "";
  private newsId;
  constructor(public loginInfoService:LoginInfoService,
              private newsService: NewsService,
              private route: ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    //console.log("okk");
    this.newsId = this.route.snapshot.paramMap.get('id');
    this.newsService.getNews(Number(this.newsId)).subscribe(
      news=>{
        //console.log(news.title);
        this.newsService.getComment(Number(this.newsId)).subscribe(res=>{
          this.news = news;
          this.news.comments = res;
          //Array<Comment>.
          
        });
      }
    );

  }

 doComment(){
  if(this.loginInfoService.isLogged()) {
    if(this.comment=="") return;
    this.newsService.addComment({name:this.loginInfoService.getName(),comment:this.comment,postId:Number(this.newsId)}).subscribe(res=>{
      if(res)
        this.news.comments.push({name:this.loginInfoService.getName(),comment:this.comment,postId:this.newsId});
    });
  }
    
  else
  //this.router.navigate(["login/"])
  this.router.navigate(["login/"]).then(value=>{console.log(this.comment)});
 }

}
