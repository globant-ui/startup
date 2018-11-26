import { Component, OnInit, } from '@angular/core';
import { SearchMusicService } from '../services/search-music.service';
import { Artist, Album } from '../spotify-interface';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';


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
              private route: ActivatedRoute,
              private sanitizer:DomSanitizer
    ) {}

  ngOnInit() {
    this.route.params
    .pipe(map(params => params['id']))
    .subscribe((id) => {
      this.searchSpotify.getArtist(id).subscribe((artist)=>{
        this.artist = artist;
        this.id = artist.id;
        this.searchSpotify.sendData(artist.name,artist.type);

      })
      this.searchSpotify.getAlbums(id).subscribe((albums)=>{
        this.albums = albums.items;
      })
    })
  
  }
  transformUrl(id){
    let url = 'https://open.spotify.com/follow/1/?uri=spotify:artist:'+id+'&size=detail&theme=dark';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
