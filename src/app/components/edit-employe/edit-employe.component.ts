import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartementService } from 'src/app/services/departement.service';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-edit-employe',
  templateUrl: './edit-employe.component.html',
  styleUrls: ['./edit-employe.component.css']
})
export class EditEmployeComponent implements OnInit {
  editEmployeForm: FormGroup;
  employes: any;
  departements: any;
  employe: any;
  constructor(private activatedRoute: ActivatedRoute,
    private router:Router,private fb: FormBuilder,private employeService:EmployeService,
    private departementService:DepartementService) { }

  ngOnInit(): void {
    
    this.editEmployeForm = this.fb.group({
      title: ['', Validators.required, Validators.maxLength(30)],
      empNum: ['', Validators.required],
      departementId: [''],
    });
    this.getEmploye(this.activatedRoute.snapshot.params['id']);
    this.GetDepartements();
  }
  updateEmploye() {
    const employeData = this.editEmployeForm.value;
    console.log('value', employeData);
    const employeId = this.employe.employeId;

    this.employeService.updateEmploye(employeId, employeData).subscribe(
      (response) => {
        console.log(response);
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

  getEmploye(employeId: any) {
    this.employeService.getEmployeById(employeId).subscribe((res: any) => {
      this.employe = res;
      console.log(res);
      console.log('this.employe.departement.departementId', this.employe.departement.departementId);

      this.editEmployeForm = this.fb.group({
        title: [this.employe.title, Validators.required],
        empNum: [this.employe.empNum, Validators.required],
        departementId: [this.employe.departement.departementId, Validators.required],
      });
    });

}
}
