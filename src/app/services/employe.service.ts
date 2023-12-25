import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  private readonly baseUrl:String=environment.url+"api/employe/"
  constructor(private http: HttpClient) { }
  getEmployes() {
    //return this.http.get(`http://localhost:8087/api/employe/GetEmployes`);
    return this.http.get(`${this.baseUrl}GetEmployes`)
  }
  addEmploye(employeData: any): Observable<any> {
    return this.http.post(
      'http://localhost:8087/api/employe/AddEmploye',
      employeData
    );
  }
  getEmployeById(employeId: any) {
    return this.http.get(
      `http://localhost:8087/api/employe/GetEmploye/${employeId}`
    );
  }
  deleteEmploye(id: any) {
    return this.http.delete(
      'http://localhost:8087/api/employe/DeleteEmploye/' + id
    );
  }

  updateEmploye(employeId: any, employeData: any): Observable<any> {
    return this.http.put(
      `http://localhost:8087/api/employe/EditEmploye/${employeId}`,
      employeData
    );
  }


}
