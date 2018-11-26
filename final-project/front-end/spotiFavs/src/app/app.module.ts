import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtistSearchComponent } from './components/artist-search/artist-search.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ParallaxComponent } from './components/parallax/parallax.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistSearchComponent,
    SearchResultsComponent,
    ParallaxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
