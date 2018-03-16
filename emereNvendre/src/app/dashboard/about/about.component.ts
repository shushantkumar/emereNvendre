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

import * as SendBird from 'SendBird';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  userDetails;
  userProducts;
  userRequests;
  // reload:Number=1;
  

  constructor(
    private aboutService:AboutService,
    private cookieService:CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUserDetails(); 
    // if(this.reload==0){
    //   window.location.reload();
    // }
    //this.sendbird();
    
    
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
  gotoPost()

  {this.router.navigate(['post']);
  console.log("went to posts");}
  
  gotoReq(){this.router.navigate(['request']);
  console.log("went to requests");}

  // sendbird(){
  //   let sb = new SendBird({'appId': '64319988-161A-4C10-B775-75D14EE4A7EE'});
  //   let userID = this.cookieService.get('ENVuserID');
  //   sb.connect(userID, function(user, error) {

  //   });
  // }
}
