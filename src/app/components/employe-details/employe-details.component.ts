import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-employe-details',
  templateUrl: './employe-details.component.html',
  styleUrls: ['./employe-details.component.css']
})
export class EmployeDetailsComponent implements OnInit {
  employeId: any;
  employe: any;
  constructor(private activatedRoute: ActivatedRoute,private employeService:EmployeService) { }

  ngOnInit(): void {
    this.GetEmployeById(this.activatedRoute.snapshot.params['id']);
  }
  GetEmployeById(id:any) {
    this.employeService.getEmployeById(id).subscribe(
      (data) => {
        this.employe = data;
        console.log(this.employe);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
