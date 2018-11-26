import { Injectable } from '@angular/core';
import {Http, Response, Request, RequestOptions, RequestOptionsArgs, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { pipe } from '@angular/core/src/render3';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchMusicService {

  

  private client_id = 'df53d4e4d81941adbf9df3886a28aba1'; // Your client id
  private client_secret = 'e88ae407a8594b8ca80dce9c5c9b502e'; // Your secret
  private redirect_uri = 'http://localhost:4200'  ;//'REDIRECT_URI'; // Your redirect uri
  private scopes = 'user-read-private user-read-email'

  accessToken: any = '';
  private tokenType: string;

  private configUrl:string;

 


  constructor(private _http:Http, private http:HttpClient) { }





  token(token:string){
    this.accessToken = this.accessToken.concat('Bearer '+ token); 
  }

  generateRandomString = function(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };



  /* getToken() {
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
      }, error => console.log(error)));
  } */

  searchMusic(str:string,type='artist'){
    let header = new Headers();
    header.append('Authorization',  this.accessToken);
    let options = new RequestOptions({ headers: header });
    let url = 'https://api.spotify.com/v1/search?q='+str+'&limit=5&type='+type;
    return this._http.get(url, options)
      .pipe(map(data => data.json()));
  }
  getArtist(id:string){
    let header = new Headers();
    header.append('Authorization',  this.accessToken);
    let options = new RequestOptions({ headers: header });
    let url = 'https://api.spotify.com/v1/artists/'+id;
    return this._http.get(url, options)
      .pipe(map(data => data.json()));
  }

  getAlbums(id:string){
    let header = new Headers();
    header.append('Authorization', this.accessToken);
    let options = new RequestOptions({ headers: header });
    let url = 'https://api.spotify.com/v1/artists/'+id+'/albums';
    return this._http.get(url, options)
      .pipe(map(data => data.json()));
    }
  
    getCurrentProfile(){
      let header = new Headers();
      header.append('Authorization', this.accessToken);
      let options = new RequestOptions({ headers: header });
      let url = 'https://api.spotify.com/v1/me';
      return this._http.get(url, options)
        .pipe(map(data => data.json()));
      }

    getFeaturedPlaylists(){
        let header = new Headers();
        let date = new Date();
        let isoDate = date.toISOString();
        header.append('Authorization', this.accessToken);
        let options = new RequestOptions({ headers: header });
        let url = 'https://api.spotify.com/v1/browse/featured-playlists?&offset=0&timestamp='+isoDate;
        return this._http.get(url, options)
          .pipe(map(data => data.json()));
        }

//Request for my api
  
    sendData(name:string,type:string){
      let url = `http://localhost:4000/search/${type}/${name}`;
      return this._http.get(url)
      .subscribe((res)=>{
        console.log(res);
      });
    }

    getData(){
      /* console.log(data); */
      let url = `http://localhost:4000/get`;
      return this.http.get(url)
    }
}