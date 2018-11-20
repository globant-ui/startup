import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ResultContainerComponent } from './result-container/result-container.component';
import { AlbumCarouselComponent } from './album-carousel/album-carousel.component';
import { LastTenResultsComponent } from './last-ten-results/last-ten-results.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { HttpModule } from '@angular/http';
import { SearchService } from './search/search.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ResultContainerComponent,
    AlbumCarouselComponent,
    LastTenResultsComponent,
    SearchItemComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
