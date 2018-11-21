import { Injectable } from '@angular/core';
import {Http, Response, Request, RequestOptions, RequestOptionsArgs, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { pipe } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class SearchMusicService {

  

  private client_id = 'df53d4e4d81941adbf9df3886a28aba1'; // Your client id
  private client_secret = 'e88ae407a8594b8ca80dce9c5c9b502e'; // Your secret
  private redirect_uri = 'http://localhost:4200'  ;//'REDIRECT_URI'; // Your redirect uri
  private scopes = 'user-read-private user-read-email'

  accessToken: any;
  private tokenType: string;

  private configUrl:string;

 


  constructor(private _http:Http) { }

 /*  searchMusic(str:string,type='artist'){
    this.url = 'https://api.spotify.com/v1/search?q='+str+'&limit=5&type='+type;
    return this._http.get(this.url);
  } */

/*   getAuthorization(){
    let authorizationTokenUrl = `https://accounts.spotify.com/api/token`;
    let access_token = 'YourAccessToken'
    let headers = new Headers({ 'Authorization': 'Bearer ' + access_token });
    this.configUrl = 'https://accounts.spotify.com/authorize?client_id='+btoa(this.client_id)+'&response_type=code&redirect_uri='+btoa(this.redirect_uri)+'&scope='+btoa(this.scopes)+'&state=34fFs29kd09'
    return this._http.post(authorizationTokenUrl, body, options)
     .pipe(map(data => data.json()))
      .pipe(tap(token => {
        this.accessToken = token.access_token;
        this.tokenType = token.token_type;
      }, error => console.log(error)));
  } */


  //.pipe(map(res=>res.json()));

  getToken() {
    let authorizationTokenUrl = `https://accounts.spotify.com/api/token`;

    let header = new Headers();
    header.append('Authorization', 'Basic  ' + btoa(this.client_id + ':' + this.client_secret));
    header.append('Content-Type', 'application/x-www-form-urlencoded;');

    let options = new RequestOptions({ headers: header });
    let body = 'grant_type=client_credentials';

    return this._http.post(authorizationTokenUrl, body, options)
      .pipe(map(data => data.json()))
      .pipe(tap(token => {
        this.accessToken = token.access_token;
        this.tokenType = token.token_type;
        token.scope = this.scopes;
      }, error => console.log(error)));
  }

  searchMusic(str:string,type='artist'){
    let header = new Headers();
    header.append('Authorization', this.tokenType + ' ' + this.accessToken);
    let options = new RequestOptions({ headers: header });
    let url = 'https://api.spotify.com/v1/search?q='+str+'&limit=5&type='+type;
    return this._http.get(url, options)
      .pipe(map(data => data.json()));
  }
}