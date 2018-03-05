import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class AboutService {
  private serverURL ='https://agile-dawn-35104.herokuapp.com';



  constructor(
    private http:HttpClient,
    private cookieService:CookieService
  ) { }

  private extractData(res: Response) {
    return res;
  }
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
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


  getUserDetails(){
    let specificUrl = this.serverURL + '/users/'+this.cookieService.get('ENVuserID');
    return this.http.get(specificUrl)
    .map(this.extractData)
    .catch(this.handleError);
  }

}
