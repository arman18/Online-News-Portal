import { Component, OnInit,Input } from '@angular/core';
import {News} from '../models/news'

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input() public news: News; 
  constructor() { }

  ngOnInit(): void {

  }

}
