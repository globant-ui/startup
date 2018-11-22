import { Component, OnInit } from '@angular/core';
import {SearchMusicService} from '../services/search-music.service';
import { Artist } from '../spotify-interface';

@Component({
  selector: 'app-search-music',
  templateUrl: './search-music.component.html',
  styleUrls: ['./search-music.component.css']
})
export class SearchMusicComponent implements OnInit {

  search:string;
  artists: Artist[];

  constructor(private test:SearchMusicService ) { }

  ngOnInit() {
  }
  searchMusic():void{
    this.test.searchMusic(this.search).subscribe((res)=>{
      if(res.status === 400){return;};
      console.log(res.artists);
      this.artists = res.artists.items;
    });
  }
} 
