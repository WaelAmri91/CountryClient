import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  PlayerId: any;
  player: any;
  constructor(private route: ActivatedRoute,private playerService:PlayerService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPlayerById(this.activatedRoute.snapshot.params['id']);
  }
  getPlayerById(id:any) {
    this.playerService.getPlayerById(id).subscribe(
      (data) => {
        this.player = data;
        console.log(this.player);
      },
      (error) => {
        console.log(error);
      }
    );
  }
 
}
