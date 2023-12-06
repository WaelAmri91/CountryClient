import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css'],
})
export class CountryDetailsComponent implements OnInit {
  countryId: any;
  country: any;
  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.countryId = this.route.snapshot.params['id'];
    console.log(this.countryId);
    this.getCountryById();
  }

  getCountryById() {
    this.countryService.getCountryById(this.countryId).subscribe(
      (data) => {
        this.country = data;
        console.log(this.country);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
