import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// import { CookieService } from 'ngx-cookie-service';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-allrequests',
  templateUrl: './allrequests.component.html',
  styleUrls: ['./allrequests.component.scss']
})
export class AllrequestsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
