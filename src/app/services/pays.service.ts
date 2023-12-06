import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  constructor(private http: HttpClient) { }

  getPays() {
    return this.http.get(`http://localhost:8087/api/pays/GetPays`);
  }
}
