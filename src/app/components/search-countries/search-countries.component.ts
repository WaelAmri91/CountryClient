import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';
import { PaysService } from 'src/app/services/pays.service';

@Component({
  selector: 'app-search-countries',
  templateUrl: './search-countries.component.html',
  styleUrls: ['./search-countries.component.css']
})
export class SearchCountriesComponent implements OnInit {
  pays: any;
  word:any;
  countrys: any;
  deleteCountryForm: FormGroup;
  updateCountryForm: FormGroup;
  country: any;
  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    private paysService :PaysService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.word = this.route.snapshot.params['word'];
    this.SearchCountrys();
    this.updateCountryForm = this.fb.group({
      title: ['', Validators.required],
      population: ['', Validators.required],
      paysId: ['', Validators.required],
    });
    this.getPays();
  }


  SearchCountrys(){
    this.countryService.SearchCountrys(this.word).subscribe(
      (data) => {
        this.countrys = data;
        console.log(this.countrys);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  deleteCountry() {
    this.countryService.deleteCountry(this.country.countryId).subscribe(
      (response: any) => {
        // Reload the users list after successful deletion
        this.ngOnInit();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getCountry(country: any) {
    this.country = country;
    this.updateCountryForm = this.fb.group({
      title: [this.country.title, Validators.required],
      population: [this.country.population, Validators.required],
      paysId: [this.country.pays.paydId, Validators.required],
    });
    console.log('this.country', this.country.pays.paydId);
  }

  updateCountry() {
    const countryData = this.updateCountryForm.value;
    console.log('vall', countryData);
    const countryId = this.country.countryId;

    this.countryService.updateCountry(countryId, countryData).subscribe(
      (response) => {
        console.log(response);
        this.ngOnInit();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getPays() {
    this.paysService.getPays().subscribe(
      (data) => {
        this.pays = data;
        console.log(this.pays);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
