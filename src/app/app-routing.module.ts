import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './components/country/country.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { SearchCountriesComponent } from './components/search-countries/search-countries.component';

const routes: Routes = [
  { path: 'country', component: CountryComponent },
  { path: 'details/:id', component: CountryDetailsComponent },
  { path: 'country/searchCountries/:word', component: SearchCountriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
