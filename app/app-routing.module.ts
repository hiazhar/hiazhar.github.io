import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ServicePageComponent } from './components/service-page/service-page.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { ArticlePageComponent } from './components/article-page/article-page.component';
import { MessageCardComponent } from './components/message-card/message-card.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path:'',component: ArticlesComponent }, 
  {path:'articles',component: ArticlesComponent},  
  {path:'contact',component: ContactCardComponent},  
  {path:'services',component: ServicePageComponent},  
  {path:'article/:id',component: ArticlePageComponent},  
  {path:'about',component: ProfileCardComponent}, 
 
  {path:'article/',component: ArticlesComponent },  
  {path:'articles/?category',component: ArticlesComponent },  
  {path:'adm6008',component: AdminLoginComponent },  

  {path:'**',component: ArticlesComponent },  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
