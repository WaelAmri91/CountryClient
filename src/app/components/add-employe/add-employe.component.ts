import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartementService } from 'src/app/services/departement.service';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {
  addEmployeForm: FormGroup;
  employes: any;
  departements: any;
  constructor( private router: Router,
    private fb: FormBuilder,private employeService:EmployeService,private departementService:DepartementService) { }

  ngOnInit(): void {
    this.addEmployeForm = this.fb.group({
      title: ['', Validators.required, Validators.maxLength(30)],
      empNum: ['', Validators.required],
      departementId: [''],
    });
    this.GetDepartements();
  }

  addEmploye() {
    const employeData = this.addEmployeForm.value;
    console.log('value', employeData);

    this.employeService.addEmploye(employeData).subscribe(
      (response) => {
        console.log('Response:', response);
        this.navigateToEmployeList();
      },
      (error) => {
        console.error(error);
      }
    );
  }
  navigateToEmployeList() {
    this.router.navigate(['/employe']);
  }

  GetDepartements() {
    this.departementService.GetDepartements().subscribe(
      (data) => {
        this.departements = data;
        console.log(this.departements);
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
