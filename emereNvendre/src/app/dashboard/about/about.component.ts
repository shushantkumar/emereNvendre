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
  particular;

  

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

  updateUser(event){
    let name = event.target.elements[0].value;
    let address = event.target.elements[1].value;
    let emailID = event.target.elements[2].value;
    let mobileNo = event.target.elements[3].value;
    // console.log(name);
    // console.log(emailID);
    // console.log(address);
    // console.log(mobileNo);
    let data={
      "name":name,
      "emailID": emailID,
      "address":address,
      "mobileNo":mobileNo
    };

    this.aboutService.updateUser(data).subscribe(
      (response) => {
        console.log(response);
      
      },
      (err) => console.log(err),
      () => {
        console.log('done!');
        //this.router.navigate(['/']);
        console.log("went to about");
      }
    );
    window.location.reload();

  }

  updatePost(prod){
    console.log(prod);
    this.particular=prod;
  }

  updateRequest(requ){
    console.log(requ);
    this.particular=requ;
  }

  updatePostItem(){
    
    let name = this.particular.name;
    let price = this.particular.price;
    let description = this.particular.description;
    let category = this.particular.category;
    let userID = this.cookieService.get('ENVuserID');

    let data={
      "name": name,
      "price": price,
      "description":description,
      "category":category,
      "userID":userID
    };
    console.log("here");
    console.log(data);
    window.location.reload();

  }
  deletePostItem(){
    let name = this.particular.name;
    let price = this.particular.price;
    let description = this.particular.description;
    let category = this.particular.category;
    let userID = this.cookieService.get('ENVuserID');

    let data={
      "name": name,
      "price": price,
      "description":description,
      "category":category,
      "userID":userID
    };
    console.log("here");
    console.log(data);
    window.location.reload();
    
  }

  updateRequestItem(){
    let name = this.particular.name;
    let price = this.particular.price;
    let description = this.particular.description;
    let category = this.particular.category;
    let userID = this.cookieService.get('ENVuserID');

    let data={
      "name": name,
      "price": price,
      "description":description,
      "category":category,
      "userID":userID
    };
    console.log("here");
    console.log(data);
    window.location.reload();
    
  }
  deleteRequestItem(){
    let name = this.particular.name;
    let price = this.particular.price;
    let description = this.particular.description;
    let category = this.particular.category;
    let userID = this.cookieService.get('ENVuserID');

    let data={
      "name": name,
      "price": price,
      "description":description,
      "category":category,
      "userID":userID
    };
    console.log("here");
    console.log(data);

    window.location.reload();
  }

  // sendbird(){
  //   let sb = new SendBird({'appId': '64319988-161A-4C10-B775-75D14EE4A7EE'});
  //   let userID = this.cookieService.get('ENVuserID');
  //   sb.connect(userID, function(user, error) {

  //   });
  // }
}
