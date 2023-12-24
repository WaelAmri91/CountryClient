import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }
  getTeams() {
    return this.http.get(`http://localhost:8087/api/team/getTeam`);
  }
}
