import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  players: any;
  player:any;
  teams:any;
  updatePlayerForm: FormGroup;
  deletePlayerForm:FormGroup;
  constructor(private playerService:PlayerService, private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.updatePlayerForm = this.fb.group({
      title: ['', Validators.required],
      playerNumber: ['', Validators.required],
      TeamId: ['', Validators.required],
    });
    this.getPlayers();
  }

  getPlayers() {
    this.playerService.getPlayers().subscribe(
      (data) => {
        this.players = data;
        console.log(this.players);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getPlayer(player: any) {
    this.player = player;
    this.updatePlayerForm = this.fb.group({
      title: [this.player.title, Validators.required],
      population: [this.player.playerNumber, Validators.required],
      paysId: [this.player.teams.teamId, Validators.required],
    });
    console.log('this.player', this.player.teams.teamId);
  }
  deletePlayer() {
    this.playerService.deletePlayer(this.player.playerId).subscribe(
      (response: any) => {
        // Reload the users list after successful deletion
        this.getPlayers();
      },
      (error) => {
        console.log(error);
      }
    );

  }
}
