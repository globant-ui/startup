import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, concat } from 'rxjs/operators';
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

  // returns de artist Profile
  getArtist(id: string) {
    return this.http.get(this.URL_API + `artistProfile/${id}`);
  }
  // returns the most listened to songs of the artist
  getArtistTopTracks(id: string) {
    return this.http.get(this.URL_API + `artistTops/${id}`).pipe(
      map(res => {
        return res['tracks'];
      })
    );
  }
  // login
  getProfile() {
    return this.http.get(this.URL_API + 'login');
  }

  // shows the "new releases" of spotify
  getNewReleases() {
    return this.http.get(this.URL_API + `new`
    ).pipe(res => {
      return res;
    });
  }
}
