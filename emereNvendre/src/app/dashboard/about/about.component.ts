import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// import {HttpClient} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import { AboutService } from './about.service';
import { CookieService } from 'ngx-cookie-service';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  userDetails;
  userProducts;
  userRequests;

  constructor(
    private aboutService:AboutService,
    private cookieService:CookieService
  ) { }

  ngOnInit() {
    this.getUserDetails(); 
  }
  getUserDetails(){
    console.log("Something is going on!");
    this.aboutService.getUserDetails().subscribe(
      (res) =>{
          // console.log(res.products);
          let response = res.user;
          this.userDetails = response;

          response = res.product_List;
          this.userProducts = response;

          response = res.order_List;
          this.userRequests = response;

          // let response=JSON.parse(res);
        //   let x,y;
        //   for (x in response){
        //     var z = response[x];
        //   for( y in z) {
        //     console.log(z[y]);
        // }}
        console.log(this.userDetails,this.userProducts,this.userRequests);
          
        }, 
      (err) => console.log(err),
      () => console.log('done!')
  );

  }
}
