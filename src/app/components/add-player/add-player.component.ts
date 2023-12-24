import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css'],
})
export class AddPlayerComponent implements OnInit {
  addPlayerForm: FormGroup;
  players: any;
  teams: any;
  constructor(
    private playerService: PlayerService,
    private router: Router,
    private fb: FormBuilder,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.addPlayerForm = this.fb.group({
      title: ['', Validators.required, Validators.maxLength(30)],
      playerNumber: ['', Validators.required],
      TeamId: [''],
    });
    this.getTeams();
  }

  addPlayer() {
    const playerData = this.addPlayerForm.value;
    console.log('vall', playerData);

    this.playerService.addPlayer(playerData).subscribe(
      (response) => {
        console.log('Response:', response);
        this.navigateToPlayerList();
      },
      (error) => {
        console.error(error);
      }
    );
  }
  navigateToPlayerList() {
    this.router.navigate(['/player']);
  }

  getTeams() {
    this.teamService.getTeams().subscribe(
      (data) => {
        this.teams = data;
        console.log(this.teams);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
