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

  constructor(private spotifyService:SearchMusicService ) { }

  ngOnInit() {
  }
  searchMusic():void{
    this.spotifyService.searchMusic(this.search).subscribe((res)=>{
      if(res.status === 400){return;};
      this.artists = res.artists.items;
    });
  }
} 
