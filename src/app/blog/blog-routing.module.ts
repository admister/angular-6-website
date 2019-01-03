import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ArticleComponent } from './article/article.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';

const routes: Routes = [
  {path: '', component: BlogPageComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path: 'article-edit/:id', component: ArticleEditComponent},
  {path: 'article-create', component: ArticleCreateComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
