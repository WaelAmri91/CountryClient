import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private http: HttpClient) { }
  GetDepartements() {
    return this.http.get(`http://localhost:8087/api/departement/getDepartement`);
  }

}
