import { Component, OnInit } from '@angular/core';
import { SearchMusicService } from '../services/search-music.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  access_token:string = '';
  arr:string[];

  playlist;
  playlistItems;

  constructor(private spotifyService:SearchMusicService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment
    .subscribe(params => {
      this.arr = params.split(/[=&]+/);
      this.access_token = this.arr[1];
      this.spotifyService.token(this.access_token);
    });

    this.spotifyService.getFeaturedPlaylists()
      .subscribe((data)=>{
        this.playlist = data;
        this.playlistItems = data.playlists.items;
      });
  }
}
