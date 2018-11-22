import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchMusicComponent }      from './search-music/search-music.component';
import { ArtistComponent } from './artist/artist.component';

const routes: Routes = [
  { path: 'search', component: SearchMusicComponent },
  { path: 'artist/:id', component: ArtistComponent }
];


@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)] 
})
export class AppRoutingModule {}