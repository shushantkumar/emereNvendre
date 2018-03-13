import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './dashboard/about/about.component';
import { PostComponent } from './dashboard/post/post.component';
import { RequestComponent } from './dashboard/request/request.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AllpostsComponent } from './allposts/allposts.component';
import { AllrequestsComponent } from './allrequests/allrequests.component';

import { AllpostsService } from './allposts/allposts.service';
import { AllrequestsService } from './allrequests/allrequests.service';
import {HeaderService} from './header/header.service';
import { AboutService } from './dashboard/about/about.service';
import {PostService} from './dashboard/post/post.service';
import {RequestService} from './dashboard/request/request.service';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import { HttpModule } from '@angular/http'; 
import { CookieService } from 'ngx-cookie-service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    ProdListComponent,
    FooterComponent,
    HeaderComponent,
    SignInComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    PostComponent,
    RequestComponent,
    AllpostsComponent,
    AllrequestsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [
    AllpostsService,
    AllrequestsService,
    HeaderService,
    AboutService,
    PostService,
    RequestService,
    CookieService 
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
