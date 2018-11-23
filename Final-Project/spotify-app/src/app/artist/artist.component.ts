import { Component, OnInit } from '@angular/core';
import { SearchMusicService } from '../services/search-music.service';
import { Artist, Album } from '../spotify-interface';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id:string
  artist: Artist;
  albums: Album[];

  constructor(private searchSpotify:SearchMusicService,
              private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params
    .pipe(map(params => params['id']))
    .subscribe((id) => {
      this.searchSpotify.getArtist(id).subscribe((artist)=>{
        this.artist = artist;
        this.id = artist.id;
      })
      this.searchSpotify.getAlbums(id).subscribe((albums)=>{
        this.albums = albums.items;
      })
    })
  }


}
