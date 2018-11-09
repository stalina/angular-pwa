import { Component, OnInit } from '@angular/core';
import { Article } from '../../model/article';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  articles: Article[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.newsService.fetch().subscribe((data:  Array<Article>) => {
      console.log(data);
      this.articles  =  data;
    }, (err) => {
      console.log(err);
    });
  }
}
