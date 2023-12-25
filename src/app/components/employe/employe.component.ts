import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  employes: any;
  employe:any;
  departements:any;
  editEmployeForm: FormGroup;
  deleteEmployeForm: FormGroup;


  constructor(private router: Router,
    private fb: FormBuilder,private employeService:EmployeService) { }

  ngOnInit(): void {
    
    this.editEmployeForm = this.fb.group({
      title: ['', Validators.required],
      empNum: ['', Validators.required],
      departementId: ['', Validators.required],
    });
    this.getEmployes();
  }

  getEmployes() {
    this.employeService.getEmployes().subscribe(
      (data) => {
        this.employes = data;
        console.log(this.employes);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getEmploye(employe: any) {
    this.employe = employe;
    this.editEmployeForm = this.fb.group({
      title: [this.employe.title, Validators.required],
      empNum: [this.employe.empNum, Validators.required],
      departementId: [this.employe.departements.departementId, Validators.required],
    });
    console.log('this.employe', this.employe.departements.departementId);
  }

  deleteEmploye() {
    this.employeService.deleteEmploye(this.employe.employeId).subscribe(
      (response: any) => {
        // Reload the users list after successful deletion
        this.getEmployes();
      },
      (error) => {
        console.log(error);
      }
    );

  }

}
