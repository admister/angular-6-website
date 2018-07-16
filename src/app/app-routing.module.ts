import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestimonialComponent } from './testimonial/testimonial.component';

import { PricingComponent } from './pricing/pricing.component';
import { IntroComponent } from './intro/intro.component';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { ClientsComponent } from './clients/clients.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoutegaurdService } from './routegaurd.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HeaderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'about', component: IntroComponent },
  { path: 'services', component: ContentComponent },
  { path: 'testimonials', component: TestimonialComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'blog', component: BlogComponent, canActivate: [RoutegaurdService] },
  { path: 'article/:id', component: ArticleComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
