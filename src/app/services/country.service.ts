import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountrys() {
    return this.http.get(`http://localhost:8087/api/country/GetCountrys`);
  }

  addCountry(countryData: any): Observable<any> {
    return this.http.post(
      'http://localhost:8087/api/country/addCountry',
      countryData
    );
  }

  deleteCountry(id: any) {
    return this.http.delete(
      'http://localhost:8087/api/country/DeleteCountry/' + id
    );
  }

  updateCountry(countryId: any, countryData: any): Observable<any> {
    return this.http.put(
      `http://localhost:8087/api/country/EditCountry/${countryId}`,
      countryData
    );
  }

  getCountryById(countryId: any) {
    return this.http.get(
      `http://localhost:8087/api/country/GetCountry/${countryId}`
    );
  }

  SearchCountrys(word: any) {
    return this.http.get(
      `http://localhost:8087/api/country/SearchCountrys/${word}`
    );
  }

  filterCountry(sortCriteria: any) {
    return this.http.get(
      `http://localhost:8087/api/country/filterCountry/${sortCriteria}`
    );
  }
}
