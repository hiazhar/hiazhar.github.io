import { Observable } from 'rxjs';
import { article } from './../components/article';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpt: HttpClient) { }

  getArticles(): Observable<article[]>{
    
    
    return this.httpt.get<article[]>('../../assets/articles.json');
  }
  getArticle(id:number): Observable<article> {
    return this.httpt.get<article>('../../assets/articles.json');
  }
}




