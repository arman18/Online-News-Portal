import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {News} from '../models/news'
import {NewsService} from '../services/news.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public news:News=new News();
  notCreated:boolean = false;
  constructor(private newsService:NewsService,private router:Router) { 
    
  }

  ngOnInit(): void {
  }

  createNews(){
    this.newsService.createNews(this.news).subscribe(res=>{
      this.router.navigate(['']);
    });
  }

}
