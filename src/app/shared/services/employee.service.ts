import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../interfaces/employee';
import { Observable, map, switchMap } from 'rxjs';

const API_URL = `${environment.apiURL}/employees`;

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // http: HttpClient = inject(HttpClient);

  // constructor() { }

  // getEmployees(): Observable<{ employees: Employee[] }>{
  //   return this.http.get<{ employees: Employee[] }>(`${API_URL}/employees`);
  // }

  // getEmployee(id: string): Observable<{ employee: Employee }>{
  //   return this.http.get<{ employee: Employee }>(`${API_URL}/employees/${id}`);
  // }
  
  // addEmployee(employee: Employee): Observable<any> {
  //   return this.http.post<{ msg: string }>(`${API_URL}/employees`, employee);
  // }

  // updateEmployee(id: string, employee: Employee): Observable<any> {
  //   return this.http.put<{ msg: string }>(`${API_URL}/employees/${id}`, employee);
  // }

  // deleteEmployee(id: string): Observable<any> {
  //   return this.http.delete<{ msg: string }>(`${API_URL}/employees/${id}`);
  // }

  API_URL = `${environment.apiURL}/employees`;
  http = inject(HttpClient);

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API_URL);
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.API_URL}/${id}`);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.API_URL}`, employee);
  }

  // createEmployee(employee: Employee): Observable<Employee> {
  //   return this.getEmployees().pipe(
  //     map((employees) => {
  //       const maxId = employees.reduce((max, emp) => Math.max(max, +emp.id), 0);
  //       employee.id = (maxId + 1).toString();
  //       return employee;
  //     }),
  //     switchMap((newEmployee) =>
  //       this.http.post<Employee>(this.API_URL, newEmployee)
  //     )
  //   );
  // }

  updateEmployee(id: string, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.API_URL}/${id}`, employee);
  }

  deleteEmployee(id: string): Observable<Object> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}
