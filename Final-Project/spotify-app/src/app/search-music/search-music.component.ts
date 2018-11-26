import { Component, OnInit } from '@angular/core';
import {SearchMusicService} from '../services/search-music.service';
import { Artist, Tracks } from '../spotify-interface';

@Component({
  selector: 'app-search-music',
  templateUrl: './search-music.component.html',
  styleUrls: ['./search-music.component.css']
})
export class SearchMusicComponent implements OnInit {

  ARTIST = 'artist';
  TRACK = 'track';
  PLAYLIST = 'playlist';

  search:string;
  artists: Artist[];
  tracks:Tracks[];
  playlists:any;
  lastSearchArtist:string[];
  lastSearchTrack:string[];
  lastSearchPlaylist:string[];
  hide:boolean = false;
  type:string;

  constructor(private spotifyService:SearchMusicService ) { }

  ngOnInit() {
  }
  searchMusic():void{
    this.spotifyService.searchMusic(this.search,this.type).subscribe((res)=>{
      if(res.status === 400){return;};
      if(this.type === 'artist'){
        this.artists = res.artists.items;
      } else if(this.type === 'track'){
        this.tracks = res.tracks.items;
      } else if(this.type === 'playlist'){
        this.playlists = res.playlists.items;
        console.log(this.playlists); 
      }
    });
  }

  showLastSearch(){
    this.hide = !this.hide;
    this.spotifyService.getData()
    .subscribe((res:any)=>{
      this.lastSearchArtist = res.artist;
      this.lastSearchTrack = res.track;
      this.lastSearchPlaylist = res.playlist;
      console.log(this.lastSearchArtist);
    });
  }
  typeChange(data){
    this.type = data;
  }
  openTrack(track){
    window.open(track.external_urls.spotify);
    this.spotifyService.sendData(this.search,this.type);
  }
  openPlaylist(playlist){
    window.open(playlist.external_urls.spotify);
    this.spotifyService.sendData(this.search,this.type);
  }
} 
