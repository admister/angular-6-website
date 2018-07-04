import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { SocialComponent } from './social/social.component';
import { PricingComponent } from './pricing/pricing.component';
import { IntroComponent } from './intro/intro.component';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ClientsComponent } from './clients/clients.component';
import { AppRoutingModule } from './/app-routing.module';
import { ConfigService } from './config.service';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { ArticleComponent } from './article/article.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PagerService } from './pager.service';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TestimonialComponent,
    SocialComponent,
    PricingComponent,
    IntroComponent,
    HeaderComponent,
    GalleryComponent,
    FooterComponent,
    ContentComponent,
    ClientsComponent,
    BlogComponent,
    PostComponent,
    ArticleComponent,
    NotfoundComponent,
    PaginationComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ConfigService, PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
