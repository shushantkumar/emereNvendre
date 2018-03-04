import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// import {HttpClient} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import { AllpostsService } from './allposts.service';
// import { CookieService } from 'ngx-cookie-service';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.scss']
})

export class AllpostsComponent implements OnInit {
 
  allpostsdata;

  constructor(
    private allpostsService:AllpostsService
  ) {}

  ngOnInit() {
    this.getAllPosts(); 

  }

  getAllPosts(){
    console.log("Something is going on!");
    this.allpostsService.getAllPosts().subscribe(
      (res) => console.log(res.products[0]),
      (err) => console.log(err),
      () => console.log('done!')
  );

  }

}
  