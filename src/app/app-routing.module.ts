import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './components/country/country.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { SearchCountriesComponent } from './components/search-countries/search-countries.component';
import { PlayerComponent } from './components/player/player.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';

const routes: Routes = [
  { path: 'country', component: CountryComponent },
  { path: 'details/:id', component: CountryDetailsComponent },
  { path: 'country/searchCountries/:word', component: SearchCountriesComponent },
  { path: 'player', component: PlayerComponent },
  { path: 'addPlayer', component: AddPlayerComponent },
  { path: 'playerDetails/:id', component: PlayerDetailsComponent },
  { path: 'editPlayer/:id', component: EditPlayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
