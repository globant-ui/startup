import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Router, NavigationCancel } from '@angular/router';
import { URLSearchParams, } from '@angular/http';
import {SearchMusicService} from '../services/search-music.service';
import { Profile } from '../spotify-interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  access_token:string = '';
  arr:string[];
  profile:any;
 
  constructor(private route: ActivatedRoute,
              private spotifyService: SearchMusicService
    ) { }

  ngOnInit() {
    this.route.fragment
      .subscribe(params => {
        this.arr = params.split(/[=&]+/);
        this.access_token = this.arr[1];
        this.spotifyService.token(this.access_token);
      });

      this.spotifyService.getCurrentProfile().subscribe( res => {
        if(res.status >= 400){return;};
        this.profile = res;
       // console.log(this.profile);
      } );
    
  }

  
}
