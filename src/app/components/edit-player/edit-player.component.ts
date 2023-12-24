import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
})
export class EditPlayerComponent implements OnInit {
  editPlayerForm: FormGroup;
  players: any;
  teams: any;
  player: any;

  constructor(
    private playerService: PlayerService,
    private fb: FormBuilder,
    private teamService: TeamService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.editPlayerForm = this.fb.group({
      title: ['', Validators.required, Validators.maxLength(30)],
      playerNumber: ['', Validators.required],
      teamId: [''],
    });
    this.getTeams();

    this.getPlayer(this.activatedRoute.snapshot.params['id']);
  }

  updatePlayer() {
    const playerData = this.editPlayerForm.value;
    console.log('vall', playerData);
    const playerId = this.player.playerId;

    this.playerService.updatePlayer(playerId, playerData).subscribe(
      (response) => {
        console.log(response);
        this.navigateToPlayerList();
      },
      (error) => {
        console.error(error);
      }
    );
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

  getPlayer(playerId: any) {
    this.playerService.getPlayerById(playerId).subscribe((res: any) => {
      this.player = res;
      console.log(res);
      console.log('this.player.team.teamId', this.player.team.teamId);

      this.editPlayerForm = this.fb.group({
        title: [this.player.title, Validators.required],
        playerNumber: [this.player.playerNumber, Validators.required],
        teamId: [this.player.team.teamId, Validators.required],
      });
    });

    console.log('this.player', this.player.teams.teamId);
  }
  navigateToPlayerList() {
    this.router.navigate(['/player']);
  }
}
