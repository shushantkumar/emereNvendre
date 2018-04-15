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
  particular;
  name:String;
  price:Number;
  description:String;
  category:String;
  prodID:String;

  

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
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        document.getElementById("snackbar").innerHTML ="Welcome to Dashboard !";
        }, 
      (err) => console.log(err),
      () => console.log('done!')
  );
  // (<HTMLInputElement> document.getElementById("save")).disabled = false;
  }
  gotoPost()
  {
    this.router.navigate(['post']);
    setTimeout(function(){
      console.log("went to allposts");
      
      window.location.reload();
    }, 2000);
   
  }
  
  gotoReq(){
    console.log("went to allrequests");
    this.router.navigate(['request']);
  

}

  updateUser(event){
    let name = event.target.elements[1].value;
    let address = event.target.elements[2].value;
    //let emailID = event.target.elements[2].value;
    let mobileNo = event.target.elements[3].value;



    // console.log(name);
    // console.log(emailID);
    // console.log(address);
    // console.log(mobileNo);
    let userID = this.cookieService.get('ENVuserID');
    let data=[
      {"propName":"name","value":name},
      {"propName":"address","value":address},
      {"propName":"mobileNo","value":mobileNo}
    ];
    console.log(data);
    this.aboutService.updateUser(data,userID).subscribe(
      (response) => {
        console.log(response);
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        document.getElementById("snackbar").innerHTML ="User Details Updated !";
      
      },
      (err) => {console.log(err);
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        document.getElementById("snackbar").innerHTML ="Server Error, Please try again !";
      
      },
      () => {
        console.log('done!');
        //this.router.navigate(['/']);
      }
    );
    setTimeout(function(){

      window.location.reload();
    }, 2000);
   

  }

  updatePost(prod){
    console.log(prod);
    this.particular=prod;
    this.prodID=prod._id;
    console.log(this.prodID);
  }

  updateRequest(requ){
    console.log(requ);
    this.particular=requ;
    this.prodID=requ._id;
    console.log(this.prodID);
  }

  updatePostItem(){
    
    let name = this.name;
    let price = this.price;
    let description = this.description;
    let category = this.category;
    if(typeof name=='undefined'){
      name = this.particular.name;
    }
    if(typeof price=='undefined'){
      price = this.particular.price;
    }
    if(typeof description=='undefined'){
      description = this.particular.description;
    }
    if(typeof category=='undefined'){
      category = this.particular.category;
    }
    // console.log(this.name);
    // console.log(this.price);
    // console.log(this.description);
    // console.log(this.category);
    // let userID = this.cookieService.get('ENVuserID');
    let prodid = this.prodID;

    let data=[
      {"propName":"name","value":name},
      {"propName":"price","value": price},
      {"propName":"description","value":description},
      {"propName":"category","value":category}
      // "userID":userID
    ];
    console.log(data);

    this.aboutService.updatePostItem(data,prodid).subscribe(
      (response) => {
        console.log(response);
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        document.getElementById("snackbar").innerHTML ="Item details updated !";
      
      },
      (err) =>{ console.log(err);
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        document.getElementById("snackbar").innerHTML ="Server Error, Please try again !";
      },
      () => {
        console.log('done!');
      }
    );


    console.log("here");
    // window.location.reload();
    setTimeout(function(){

      window.location.reload();
    }, 2000);

  }

  deletePostItem(){
    let prodid = this.prodID;

    this.aboutService.deletePostItem(prodid).subscribe(
      (response) => {
        console.log(response);
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        document.getElementById("snackbar").innerHTML ="Item deleted !";
      
      },
      (err) =>{ console.log(err);
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        document.getElementById("snackbar").innerHTML ="Server Error, Please try again !";
      },
      () => {
        console.log('done!');
      }
    );

    console.log("here");
    // console.log(data);
    // window.location.reload();
    setTimeout(function(){

      window.location.reload();
    }, 2000);
    
  }

  updateRequestItem(){
    let name = this.name;
    let price = this.price;
    let description = this.description;
    let category = this.category;
    if(typeof name=='undefined'){
      name = this.particular.name;
    }
    if(typeof price=='undefined'){
      price = this.particular.price;
    }
    if(typeof description=='undefined'){
      description = this.particular.description;
    }
    if(typeof category=='undefined'){
      category = this.particular.category;
    }

    let prodid = this.prodID;

    let data=[
      {"propName":"name","value":name},
      {"propName":"price","value": price},
      {"propName":"description","value":description},
      {"propName":"category","value":category}
      // "userID":userID
    ];
    console.log(data);

    this.aboutService.updateRequestItem(data,prodid).subscribe(
      (response) => {
        console.log(response);
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        document.getElementById("snackbar").innerHTML ="Item details updated !";
      
      },
      (err) =>{ console.log(err);
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        document.getElementById("snackbar").innerHTML ="Server Error, Please try again !";
      },
      () => {
        console.log('done!');
      }
    );


    console.log("here");
    // window.location.reload();
    setTimeout(function(){

      window.location.reload();
    }, 2000); 

    
  }
  deleteRequestItem(){
    let prodid = this.prodID;

    this.aboutService.deleteRequestItem(prodid).subscribe(
      (response) => {
        console.log(response);
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        document.getElementById("snackbar").innerHTML ="Item deleted !";
      
      },
      (err) =>{ console.log(err);
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        document.getElementById("snackbar").innerHTML ="Server Error, Please try again !";
      },
      () => {
        console.log('done!');
      }
    );

    console.log("here");
    setTimeout(function(){

      window.location.reload();
    }, 2000);

    // window.location.reload();
  }

  
  // sendbird(){
  //   let sb = new SendBird({'appId': '64319988-161A-4C10-B775-75D14EE4A7EE'});
  //   let userID = this.cookieService.get('ENVuserID');
  //   sb.connect(userID, function(user, error) {

  //   });
  // }
    gotoAllPost()

{this.router.navigate(['allposts']);
console.log("went to allposts");}

gotoAllReq(){this.router.navigate(['allrequests']);
console.log("went to allrequests");}
}
