import { Component, OnInit } from '@angular/core';
import { ArtistSearchService } from '../../services/artist-search.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [NavBarComponent]
})
export class NavBarComponent implements OnInit {

  constructor(private loginService: ArtistSearchService) { }
  profile: [];


  ngOnInit() {
    return this.loginService.getProfile()
      .subscribe((res: any) => {
        this.profile = res;
        console.log(this.profile);
      });
  }
}
