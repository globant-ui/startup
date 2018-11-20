import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './search.service';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],

})
export class SearchComponent implements OnInit {
  inputField: FormControl = new FormControl;
  searchResults: any[] = [];
  constructor(private searchService: SpotifyService) { }

  ngOnInit() {
    this.inputField.valueChanges
    .subscribe(inputField => this.SpotifyService.getArtist(inputField)
    .subscribe(result => {
      if (result.status === 400) {
        return;
      } else { this.searchResults = result.artists.items; }
    }));
  }

}
