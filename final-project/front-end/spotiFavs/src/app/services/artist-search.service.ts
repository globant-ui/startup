import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { text } from '@angular/core/src/render3';
// import "rxjs/add/operator/map";

@Injectable({
  providedIn: 'root'
})
export class ArtistSearchService {
  artists = [];
  readonly URL_API = 'http://localhost:3000/';
  searchData: any;

  constructor(private http: HttpClient) { }


  // build a list with the artists related to the search parameter
  search(name: string) {
    return this.http.get(this.URL_API + `artist/${name}`
    ).pipe(res => {
      return res;
    });
  }

  // login
  getProfile() {
    return this.http.get(this.URL_API + 'profile'
    ).pipe( res => {
      return res;
    });
  }
  saveHistory(artistName) {

    return this.http.post(this.URL_API, { artistName: artistName }, {responseType: 'text'});
  }
  // shows the "new releases" of spotify
  getNewReleases() {
    return this.http.get(this.URL_API + `new`
    ).pipe(res => {
      return res;
    });
  }
}
