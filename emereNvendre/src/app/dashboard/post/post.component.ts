import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import {PostService} from './post.service';
import * as $ from 'jquery';
import { parseCookieValue } from '@angular/common/src/cookie';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  

  constructor(
    private postService:PostService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
  }

  PostProduct(event){
    event.preventDefault();
    // console.log(event);
    let name = event.target.elements[0].value;
    let price = event.target.elements[1].value;
    let description = event.target.elements[2].value;
    let userID = this.cookieService.get('ENVuserID');
    let productImage = event.target.elements[3].value;

    let data={
      "name": name,
      "price": price,
      "description":description,
      "productImage":productImage,
      "userID":userID
    };
    // console.log(username,password);
    
    this.postService.PostProduct(data)
      .subscribe(
        (response) => {
        console.log(response);
        
       
      
      },
      (err) => console.log(err),
      () => console.log('done!')
    );

  }

}
