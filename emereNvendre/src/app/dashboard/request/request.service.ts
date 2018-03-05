import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class RequestService {
  private serverURL ='https://agile-dawn-35104.herokuapp.com';

  constructor(private http:HttpClient,private cookieService: CookieService) { }


  private extractData(res: Response) {
    return res;
  }
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  PostRequest(data){
    let specificUrl = this.serverURL + '/orders/';
    let headers =  {headers: new  HttpHeaders({ 'Content-Type':  'application/json','authorization':'Bearer '+this.cookieService.get('ENVtoken')})};
    console.log(headers);

    // let params = new URLSearchParams();
    // for(var key in data){
    //   params.set(key, data[key]);
    // }
    console.log(data);
    return this.http.post(specificUrl,data,headers)
    .map(this.extractData)
    .catch(this.handleError);

  }

}
