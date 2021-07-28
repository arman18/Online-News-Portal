import { Injectable } from '@angular/core';
import {News} from '../models/news';
import { Comment } from '../models/comment';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = "http://localhost:5002/api/";
  private newses: News[];
  public searchText="";
  constructor(private http:HttpClient) { 
    // this.newses = [{
    //   id: 1,
    //   title: "this is first news!",
    //   content: "first news contains empty contents",
    //   comments: [{name:"arman",comment:"excelent"},
    // {name:"sadi",comment:"good"}
    // ]
    // },
    // {
    //   id: 2,
    //   title: "this is second news!",
    //   content: "second news contains empty contents",
    //   comments: [{name:"arman",comment:"excelent"},
    // {name:"sadi",comment:"good"}
    // ]
    // },
    // {
    //   id: 3,
    //   title: "this is third news!",
    //   content: "third news contains empty contents",
    //   comments: [{name:"arman",comment:"excelent"},
    // {name:"sadi",comment:"good"}
    // ]
    // }
  //]
  }
  getNews(id: number) :Observable<News>{
    return this.http.get<News>(this.apiUrl+'News/'+id);
  }
  getNewses() : Observable<News[]>{
    return this.http.get<News[]>(this.apiUrl+'News');
  }
  createNews(news: News):Observable<News> {
    return this.http.post<News>(this.apiUrl+"Add/news",news);
  }
  updateNews(news: News) : Observable<News>{
    return this.http.post<News>(this.apiUrl+"Update/news",news);
  }
  deleteNews(nid:number):Observable<boolean>{
    return this.http.get<boolean>(this.apiUrl+"Delete/News/"+nid);
    // let index=-1;
    // this.newses.find((each,id)=>{
    //   if(nid==each.id) {
    //     index = id;
    //     return true;
    //   }
    // });
    // if(index==-1) return false;
    // this.newses.splice(index,1);
  }
  getNewId():number{
    return this.newses.length+1;
  }
  addComment(comment:Comment):Observable<boolean>{
    return this.http.post<boolean>(this.apiUrl+'AddComment/news',comment);
    
    // let index=-1;
    // this.newses.find((each,id)=>{
    //   if(postId==each.id) {
    //     index = id;
    //     return true;
    //   }
    // });
    // if(index==-1) return false;
    // this.newses[index].comments.push(comment);
  }
  getComment(postId:number):Observable<Comment[]>{
    return this.http.get<Comment[]>(this.apiUrl+'GetAllComment/news/'+postId);
  }
}
