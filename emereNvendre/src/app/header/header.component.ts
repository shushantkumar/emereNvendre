import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import {HeaderService} from './header.service';
import * as $ from 'jquery';
import { parseCookieValue } from '@angular/common/src/cookie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cookieValue = '';

  constructor(
    private headerService:HeaderService
  ) { }

  ngOnInit() {
  }

  LoginEvent(event){
    event.preventDefault();
    console.log(event);
    let username = event.target.elements[0].value;
    let password = event.target.elements[1].value;
    let data={
      "emailID": username,
      "password": password
    };
    console.log(username,password);

    
    this.headerService.LoginEvent(data)
      .subscribe(
        (response) => {
        console.log(response);
          
      
      },
      (err) => console.log(err),
      () => console.log('done!')
    );

  }

  RegisterEvent(event){
    event.preventDefault();
    console.log(event);
    let name = event.target.elements[0].value;
    let emailID = event.target.elements[1].value;
    let address = event.target.elements[2].value;
    let mobileNo = event.target.elements[3].value;
    let password = event.target.elements[4].value;
    let data={
      "name":name,
      "emailID": emailID,
      "address":address,
      "mobileNo":mobileNo,
      "password": password
    };
    console.log(name,emailID,address,mobileNo,password);

    this.headerService.RegisterEvent(data)
      .subscribe(
        (response) => {
        console.log(response);
      
      },
      (err) => console.log(err),
      () => console.log('done!')
    );

  }
}
