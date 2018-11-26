import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistSearchService {
  artists = [];
  readonly URL_API = 'http://localhost:3000' ;

  constructor( private http: HttpClient) { }

  search(name: string) {
    return this.http.get(this.URL_API + `/artist/${name}`);
  }
}
