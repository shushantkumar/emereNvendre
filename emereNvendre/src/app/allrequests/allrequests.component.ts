import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// import {HttpClient} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import { AllrequestsService } from './allrequests.service';
// import { CookieService } from 'ngx-cookie-service';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-allrequests',
  templateUrl: './allrequests.component.html',
  styleUrls: ['./allrequests.component.scss']
})
export class AllrequestsComponent implements OnInit {
  allrequestsdata;

  constructor(private allrequestsService:AllrequestsService) { }

  ngOnInit() {
    this.getAllRequests();
  }

  getAllRequests(){
    console.log("Something is going on!");
    this.allrequestsService.getAllRequests().subscribe(
      (res) =>{
          console.log(res.orders);
          let response = res.orders;
          this.allrequestsdata = response;
          // let response=JSON.parse(res);
        //   let x,y;
        //   for (x in response){
        //     var z = response[x];
        //   for( y in z) {
        //     console.log(z[y]);
        // }}
          
        }, 
      (err) => console.log(err),
      () => console.log('done!')
  );

  }

}
