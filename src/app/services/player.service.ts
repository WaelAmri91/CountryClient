import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private readonly baseUrl:String=environment.url+"api/player/"
  constructor(private http: HttpClient) { }

  getPlayers() {
   // return this.http.get(`http://localhost:8087/api/player/GetPlayers`);
    return this.http.get(`${this.baseUrl}GetPlayers`)
  }

  addPlayer(playerData: any): Observable<any> {
    return this.http.post(
      'http://localhost:8087/api/player/AddPlayer',
      playerData
    );
  }

  getPlayerById(PlayerId: any) {
    return this.http.get(
      `http://localhost:8087/api/player/GetPlayer/${PlayerId}`
    );
  }
  deletePlayer(id: any) {
    return this.http.delete(
      'http://localhost:8087/api/player/DeletePlayer/' + id
    );
  }

  updatePlayer(playerId: any, playerData: any): Observable<any> {
    return this.http.put(
      `http://localhost:8087/api/player/EditPlayer/${playerId}`,
      playerData
    );
  }

}
