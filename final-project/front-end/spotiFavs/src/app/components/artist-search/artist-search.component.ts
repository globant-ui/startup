import { Component, OnInit } from '@angular/core';
import { ArtistSearchService } from '../../services/artist-search.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.css'],
  providers: [ArtistSearchComponent]
})
export class ArtistSearchComponent implements OnInit {

  constructor(private searchArtistService: ArtistSearchService) { }
  searchStr: string;


  searchArtist() {
    console.log(this.searchStr);
    this.searchArtistService.search(this.searchStr)
    .subscribe(res => {
      console.log(res);
    });

  }
  ngOnInit() {

  }

}
