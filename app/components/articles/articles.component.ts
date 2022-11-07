import { Component, OnInit } from '@angular/core';
import { article } from '../article';
import { HttpService } from './../../services/http.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

 
  public category : any='Technology';
  public articlelist?: article[]=[];

  constructor( private httpService: HttpService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category');
    this.httpService.getArticles()
        .subscribe(data=> this.articlelist = data);
  }
}
