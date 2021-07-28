import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import {NewsService} from '../services/news.service';
import {News} from '../models/news';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
  public news:News = new News();
  public notModified:boolean = false;
  constructor(private router:Router,private newsService: NewsService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const newsId = this.route.snapshot.paramMap.get('id');
    this.newsService.getNews(Number(newsId)).subscribe(res=>{
      this.news = res;
    });
  }
  modifyNews(){
    this.newsService.updateNews(this.news).subscribe(res=>{
      this.router.navigate(['']);
    });
  }

}
