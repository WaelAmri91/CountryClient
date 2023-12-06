import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';
import { PaysService } from 'src/app/services/pays.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  countrys: any;
  pays: any;
  addCountryForm: FormGroup;
  deleteCountryForm: FormGroup;
  updateCountryForm: FormGroup;
  country: any;
  filter : boolean = false;
  sortCriteria : String;


  constructor(
    private countryService: CountryService,
    private paysService: PaysService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCountrys();

    this.addCountryForm = this.fb.group({
      title: ['', Validators.required],
      population: ['', Validators.required],
      paysId: ['', Validators.required],
    });

    this.updateCountryForm = this.fb.group({
      title: ['', Validators.required],
      population: ['', Validators.required],
      paysId: ['', Validators.required],
    });
    this.getPays();
  }

  selectedCriteria(event :any){
    this.filter = true;
    this.sortCriteria = event.target.value ;
    this.getFilteredCountries();
    console.log("event",event.target.value);
  }
  getFilteredCountries(){
    this.countryService.filterCountry(this.sortCriteria).subscribe(
      (data) => {
        this.countrys = data;
        console.log(this.countrys);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getCountrys() {
    this.countryService.getCountrys().subscribe(
      (data) => {
        this.countrys = data;
        console.log(this.countrys);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addCountry() {
    const countryData = this.addCountryForm.value;
    console.log('vall', countryData);

    this.countryService.addCountry(countryData).subscribe(
      (response) => {
        console.log('Response:', response);

        this.ngOnInit();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteCountry() {
    this.countryService.deleteCountry(this.country.countryId).subscribe(
      (response: any) => {
        // Reload the users list after successful deletion
        this.getCountrys();
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

  search(searchTerm: string) {
    this.router.navigate(['/country/searchCountries',searchTerm]);
  }

}
