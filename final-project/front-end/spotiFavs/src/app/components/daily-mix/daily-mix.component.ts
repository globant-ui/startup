import { Component, OnInit } from '@angular/core';
import { ArtistSearchService } from '../../services/artist-search.service';

@Component({
  selector: 'app-daily-mix',
  templateUrl: './daily-mix.component.html',
  styleUrls: ['./daily-mix.component.css'],
  providers: [DailyMixComponent]
})
export class DailyMixComponent implements OnInit {
  news: any[] = [];
  constructor(private searchArtistService: ArtistSearchService) {

  }
  loadCarousel() {


    return this.searchArtistService.getNewReleases()
        .subscribe(res =>
          this.news = res['items']),
          console.log(this.news);
  }

  ngOnInit() {

  }

}
