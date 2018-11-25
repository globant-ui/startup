import { Component, OnInit } from '@angular/core';
import { SearchMusicService } from '../services/search-music.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  playlist;
  playlistItems;

  constructor(private spotifyService:SearchMusicService) { }

  ngOnInit() {
    this.spotifyService.getFeaturedPlaylists()
      .subscribe((data)=>{
        this.playlist = data;
        this.playlistItems = data.playlists.items;
        console.log(this.playlistItems);
      });
  }

}
