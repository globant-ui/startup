import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchMusicComponent }      from './search-music/search-music.component';
import { ArtistComponent } from './artist/artist.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  { path: 'search', component: SearchMusicComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'profile', component: ProfileComponent }
];


@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)] 
})
export class AppRoutingModule {}