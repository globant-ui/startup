import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';


import { ArtistSearchComponent } from './components/artist-search/artist-search.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { HttpClientModule } from '@angular/common/http';
import { DailyTopComponent } from './components/daily-top/daily-top.component';
import { DailyMixComponent } from './components/daily-mix/daily-mix.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    ArtistSearchComponent,
    SearchResultsComponent,
    ParallaxComponent,
    DailyTopComponent,
    DailyMixComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
