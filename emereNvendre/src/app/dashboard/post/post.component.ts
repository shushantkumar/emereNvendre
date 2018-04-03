import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
// import {Router} from '@angular/router';
import {PostService} from './post.service';
import * as $ from 'jquery';

import { parseCookieValue } from '@angular/common/src/cookie';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  selectedFile:File=null;

  constructor(
    private postService:PostService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
   
  }
  
  onFileSelected(event){
    console.log(event);
    this.selectedFile=<File>event.target.files[0];
    (<HTMLInputElement> document.getElementById("afterselect")).innerHTML = "Uploaded";
  }

  PostProduct(event){
    event.preventDefault();
    // console.log(event);
    let name = event.target.elements[0].value;
    let price = event.target.elements[1].value;
    let description = event.target.elements[2].value;
    let category = event.target.elements[3].value;
    let userID = this.cookieService.get('ENVuserID');

    if(name==""||price==""||description==""||category==""){
      let x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      document.getElementById("snackbar").innerHTML ="Please enter all the fields !";
    }
    else
    
    // let productImage = event.target.elements[3].value;
    // console.log(productImage);
    {// 
    let formData: FormData = new FormData();
    formData.append('name', name); 
    formData.append('price', price);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('productImage',this.selectedFile);
    // formData.append('productImage', productImage);
    formData.append('userID', userID);

    //  let data={
    //    "name": name,
    //    "price": price,
    //    "description":description,
    //    "productImage":productImage,
    //    "userID":userID
    //  };
     //console.log(data);
    
    this.postService.PostProduct(formData)
      .subscribe(
        (response) => {
        console.log(response);
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        document.getElementById("snackbar").innerHTML ="Product Successfully Posted !";
       
      
      },
      (err) => {console.log(err);
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        document.getElementById("snackbar").innerHTML ="Server Error, Please try again !";
      
      },
      () => console.log('done!')
    );
    this.router.navigate(['about']);
    console.log("went to about");
  }
}
}
