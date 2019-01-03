import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SocialComponent } from './social/social.component';


import { FooterComponent } from './footer/footer.component';

import { AppRoutingModule } from './/app-routing.module';
import { ConfigService } from './config.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ServicesModule } from './services/services.module';
import { GalleryModule } from './gallery/gallery.module';
import { NotfoundModule } from './notfound/notfound.module';
import { ClientsModule } from './clients/clients.module';
import { TestimonialModule } from './testimonial/testimonial.module';
import { PricingModule } from './pricing/pricing.module';
import { BlogModule } from './blog/blog.module';
import { WebsiteBlockComponent } from './website-block/website-block.component';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SocialComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ContactusComponent,
    NavmenuComponent,
    SubscribeComponent,
    WebsiteBlockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeModule,
    AboutModule,
    ServicesModule,
    GalleryModule,
    UserDashboardModule,
    NotfoundModule,
    ClientsModule,
    TestimonialModule,
    PricingModule,
    BlogModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
