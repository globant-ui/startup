import { Component, OnInit } from '@angular/core';
import {SearchMusicService} from '../services/search-music.service'

@Component({
  selector: 'app-search-music',
  templateUrl: './search-music.component.html',
  styleUrls: ['./search-music.component.css']
})
export class SearchMusicComponent implements OnInit {

  search:string;

  constructor(private test:SearchMusicService ) { }

  ngOnInit() {
  }
  searchMusic():void{
    this.test.searchMusic(this.search).subscribe((artist)=>{
      console.log(artist.artists.items[0].name);
    });
  }
} 
