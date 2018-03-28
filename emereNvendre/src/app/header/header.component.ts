import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import {HeaderService} from './header.service';
import * as $ from 'jquery';
import {GoogleSignInSuccess} from 'angular-google-signin';
import { parseCookieValue } from '@angular/common/src/cookie';

declare const gapi:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cookieENVuserID = '';
  cookieENVtoken = '';

  constructor(
    private headerService:HeaderService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {

  }
  
  private myClientId: string = '845484216154-2nuk8avekh8o02oqc9ct699dcgekvm16.apps.googleusercontent.com';
 
  onGoogleSignInSuccess(event: GoogleSignInSuccess) {
    let googleUser: gapi.auth2.GoogleUser = event.googleUser;
    let id: string = googleUser.getId();
    let profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
    // console.log('ID: ' + profile.getId()); 
    //     console.log(profile.getEmail())
    // console.log('Name: ' + profile.getName());

    let name = profile.getName();
    let emailID = profile.getEmail();
    let password = profile.getId()+profile.getName();

    let data = {
      "name":name,
      "emailID": emailID,
      "password":password
    }
    console.log(data);
    this.cookieService.delete('ENVuserID');
    this.cookieService.delete('ENVtoken');
    this.headerService.onGoogleSignInSuccess(data)
      .subscribe(
        (response) => {
        console.log(response);
        this.cookieService.set( 'ENVuserID', response.userID );
        this.cookieService.set('ENVtoken',response.token);

        this.cookieENVuserID = this.cookieService.get('ENVuserID');
        this.cookieENVtoken = this.cookieService.get('ENVtoken');

        console.log(this.cookieENVuserID,this.cookieENVtoken);
      
      },
      (err) => console.log(err),
      () => console.log('done!')
    );
    this.router.navigate(['about']);
    console.log("went to about");
   

  }

  LoginEvent(event){
    event.preventDefault();
    // console.log(event);
    let username = event.target.elements[0].value;
    let password = event.target.elements[1].value;
    let data={
      "emailID": username,
      "password": password
    };

    
    this.headerService.LoginEvent(data)
      .subscribe(
        (response) => {
        console.log(response);
        this.cookieService.set( 'ENVuserID', response.userID );
        this.cookieService.set('ENVtoken',response.token);

        this.cookieENVuserID = this.cookieService.get('ENVuserID');
        this.cookieENVtoken = this.cookieService.get('ENVtoken');

        console.log(this.cookieENVuserID,this.cookieENVtoken);
      
      },
      (err) => console.log(err),
      () => console.log('done!')
    );
    this.router.navigate(['about']);
    console.log("went to about");
   

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
      () => {
        console.log('done!');
        //this.router.navigate(['/']);
        console.log("went to about");
      }
    );
    this.router.navigate(['']);

  }

//  googleSign(){  
//   console.log("Reached @ here"); 
//   function onSignIn(googleUser) {
//     // Useful data for your client-side scripts:
//     console.log("Reached atleast here");
    
//     var profile = googleUser.getBasicProfile();
//     console.log(profile);
//     console.log("ID: " + profile.getId()); // Don't send this directly to your server!
//     console.log('Full Name: ' + profile.getName());
//     console.log('Given Name: ' + profile.getGivenName());
//     console.log('Family Name: ' + profile.getFamilyName());
//     console.log("Image URL: " + profile.getImageUrl());
//     console.log("Email: " + profile.getEmail());

//     // The ID token you need to pass to your backend:
//     var id_token = googleUser.getAuthResponse().id_token;
//     console.log("ID Token: " + id_token);
//   };}


}
