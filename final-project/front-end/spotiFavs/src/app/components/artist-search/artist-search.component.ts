import { Component, OnInit } from '@angular/core';
import { ArtistSearchService } from '../../services/artist-search.service';




@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.css'],
  providers: [ArtistSearchComponent]
})
export class ArtistSearchComponent implements OnInit {

  constructor(private searchArtistService: ArtistSearchService) { }
  searchStr: string;
  artists: any[] = [];

  searchArtist() {

    return this.searchArtistService.search(this.searchStr)
      .subscribe(res =>
        this.artists = res['items']);

  }
  sendSearchParam() {
    setTimeout(() => {
     return this.searchArtistService.saveHistory(this.searchStr);
    }, 2000);
  }
  ngOnInit() {

  }

}
