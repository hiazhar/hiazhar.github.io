import { article } from './../article';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {
  
  public articlelist: article[]=[];
  public id?: any;
  constructor( private httpService: HttpService , private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.id = parseInt(this.id)-101;
    this.httpService.getArticles()
        .subscribe(data=> this.articlelist = data);
    if(this.id<0){
      this.router.navigate(['']);
    }
  }
}
