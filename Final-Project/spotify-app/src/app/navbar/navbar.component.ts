import { Component, OnInit } from '@angular/core';
import { SearchMusicService } from '../services/search-music.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {


  constructor(private test:SearchMusicService) { }

  ngOnInit() {
  }
/*   getToken(){
    this.test.getToken().subscribe( tokenObject => {
      console.log(tokenObject);
    } ); 
  } */

  login(){
    this.test.login();
    console.log("l");
  }
}
