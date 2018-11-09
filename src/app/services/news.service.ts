import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Article } from '../model/article';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsURL =  'https://gapi.xyz/api/V1/?q=france&lang=fr';

  constructor(private  httpClient:  HttpClient) {}

  fetch():  Observable<Article[]> {
    return <Observable<Article[]>> this.httpClient.get(this.newsURL).pipe(map((news: any) => news.content));
  }
}
