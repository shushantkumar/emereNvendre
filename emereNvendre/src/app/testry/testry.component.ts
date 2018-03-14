import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import {TestryService} from './testry.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery';
import { parseCookieValue } from '@angular/common/src/cookie';
import { CookieService } from 'ngx-cookie-service';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-testry',
  templateUrl: './testry.component.html',
  styleUrls: ['./testry.component.scss']
})
export class TestryComponent implements OnInit {

  selectedFile:File=null;
  constructor(
    private testryService:TestryService,
    private http:HttpClient,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
  }

  onFileSelected(event){
    console.log(event);
    this.selectedFile=<File>event.target.files[0];
    
  }
  onUpload(){
    let name = "teu";
    let price = "1234";
    let description = "mast";
    let userID = this.cookieService.get('ENVuserID');
    const fd = new FormData();
    fd.append('productImage',this.selectedFile);
    fd.append('name', name); 
    fd.append('price', price);
    fd.append('description', description);
    // fd.append('productImage', productImage);
    fd.append('userID', userID);
    let headers =  {headers: new  HttpHeaders({'authorization':'Bearer '+this.cookieService.get('ENVtoken')})};
    
    this.http.post('https://agile-dawn-35104.herokuapp.com/products/',fd,headers)
    .subscribe(res=>{
      console.log(res);
    })
  }
}
