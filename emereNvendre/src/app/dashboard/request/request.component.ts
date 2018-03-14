import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import {RequestService} from './request.service';
import * as $ from 'jquery';
import { parseCookieValue } from '@angular/common/src/cookie';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  constructor(
    private requestService:RequestService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  PostRequest(event){
    event.preventDefault();
    // console.log(event);
    let name = event.target.elements[0].value;
    let price = event.target.elements[1].value;
    let description = event.target.elements[2].value;
    let category = event.target.elements[3].value;
    let userID = this.cookieService.get('ENVuserID');

    let data={
      "name": name,
      "price": price,
      "description":description,
      "category":category,
      "userID":userID
    };
    // console.log(username,password);
    
    this.requestService.PostRequest(data)
      .subscribe(
        (response) => {
        console.log(response);
        
       
      
      },
      (err) => console.log(err),
      () => console.log('done!')
    );
    this.router.navigate(['about']);
    console.log("went to about");

  }

}
