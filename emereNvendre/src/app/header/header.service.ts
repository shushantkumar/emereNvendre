import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class HeaderService {
  private serverURL ='https://agile-dawn-35104.herokuapp.com/users';

  constructor(private http:HttpClient) { }

    
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

  LoginEvent(data){
    let specificUrl = this.serverURL + '/login/';
    let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/json'})};

    console.log(data);

    return this.http.post(specificUrl,data, headers)
    .map(this.extractData)
    .catch(this.handleError);
  }


  RegisterEvent(data){
    let specificUrl = this.serverURL + '/signup/';
    let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/json'})};

    console.log(data);

    return this.http.post(specificUrl,data, headers)
    .map(this.extractData)
    .catch(this.handleError);
  }


}
