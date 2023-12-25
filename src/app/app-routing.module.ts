import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './components/country/country.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { SearchCountriesComponent } from './components/search-countries/search-countries.component';
import { PlayerComponent } from './components/player/player.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { EmployeComponent } from './components/employe/employe.component';
import { EmployeDetailsComponent } from './components/employe-details/employe-details.component';
import { AddEmployeComponent } from './components/add-employe/add-employe.component';
import { EditEmployeComponent } from './components/edit-employe/edit-employe.component';

const routes: Routes = [
  { path: 'country', component: CountryComponent },
  { path: 'details/:id', component: CountryDetailsComponent },
  { path: 'country/searchCountries/:word', component: SearchCountriesComponent },
  { path: 'player', component: PlayerComponent },
  { path: 'addPlayer', component: AddPlayerComponent },
  { path: 'playerDetails/:id', component: PlayerDetailsComponent },
  { path: 'editPlayer/:id', component: EditPlayerComponent },
  { path: 'employe', component: EmployeComponent },
  { path: 'employeDetails/:id', component: EmployeDetailsComponent },
  { path: 'addEmploye', component: AddEmployeComponent },
  { path: 'editEmploye/:id', component: EditEmployeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
