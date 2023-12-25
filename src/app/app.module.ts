import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './components/country/country.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountryDetailsComponent,
    SearchCountriesComponent,
    PlayerComponent,
    AddPlayerComponent,
    PlayerDetailsComponent,
    EditPlayerComponent,
    EmployeComponent,
    EmployeDetailsComponent,
    AddEmployeComponent,
    EditEmployeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
