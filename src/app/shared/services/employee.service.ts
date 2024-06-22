import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Employee } from '../interfaces/employee';
import { Observable } from 'rxjs';

const API_URL = `${environment.apiURL}/employees`;

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  http: HttpClient = inject(HttpClient);

  constructor() { }

  getEmployees(): Observable<{ employees: Employee[] }>{
    return this.http.get<{ employees: Employee[] }>(`${API_URL}/employees`);
  }

  getEmployee(id: string): Observable<{ employee: Employee }>{
    return this.http.get<{ employee: Employee }>(`${API_URL}/employees/${id}`);
  }
  
  addEmployee(employee: Employee): Observable<any> {
    return this.http.post<{ msg: string }>(`${API_URL}/employees`, employee);
  }

  updateEmployee(id: string, employee: Employee): Observable<any> {
    return this.http.put<{ msg: string }>(`${API_URL}/employees/${id}`, employee);
  }

  deleteEmployee(id: string): Observable<any> {
    return this.http.delete<{ msg: string }>(`${API_URL}/employees/${id}`);
  }
}
