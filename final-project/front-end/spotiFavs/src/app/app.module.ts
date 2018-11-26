import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl } from '@angular/forms';
import { AppComponent } from './app.component';
import { ArtistSearchComponent } from './components/artist-search/artist-search.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ArtistSearchComponent,
    SearchResultsComponent,
    ParallaxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
