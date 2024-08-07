import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { MatDialog } from '@angular/material/dialog'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { Employee } from 'src/app/shared/interfaces/employee';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeUpdateComponent } from '../employee-update/employee-update.component';



@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatIcon,
    MatPaginator,
    MatTable,
    ReactiveFormsModule,
    EmployeeUpdateComponent,
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  // EmployeeService = inject(EmployeeService);
  // employees: Employee[] = [];

  // dataSource = new MatTableDataSource<Employee[]>();

  // ngOnInit() {
  //   this.EmployeeService
  //   .getEmployees()
  //   .subscribe( stream => {this.dataSource.data = stream as any});
  // }

  // getEmployees() {
  //   this.employeeService.getEmployees().subscribe({
  //     next: (response) => {
  //       this.dataSource = new MatTableDataSource(this.dataSource.data);
  //       this.dataSource.paginator = this.paginator;
  //       this.dataSource.sort = this.sort;
  //       console.log(response)
  //     },
  //     error: (response) => {
  //       console.error('Error getting employees', response);
  //     },
    
  //   })
  // }
  // displayedColumns: string[] = [
  //   'id',
  //   'name',
  //   'position', 
  // ];

  // // dataSource = new MatTableDataSource<any>();
  // // dataSource = new MatTableDataSource([]);
  
  
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;

  // constructor(
  //   private dialog: MatDialog,
  //   private employeeService: EmployeeService,
  // ) {}

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if(this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  // deleteEmployee(id: string) {
  //   let confirm = window.confirm('Are you sure you want to delete this employee?');
  //   if(confirm) {
  //     this.employeeService.deleteEmployee(id).subscribe({
  //       next: (response) => {
  //         alert('Employee deleted');
  //         this.getEmployees();
  //       },
  //       error: (response) => {
  //         console.error('Error deleting employee', response);
  //       },
  //     });
  //   }
  // }

  // openEditForm(employee: any) {
  //   const dialogRef = this.dialog.open(EmployeeComponent, {
  //     data: employee,
  //   })

  //   dialogRef.afterClosed().subscribe({
  //     next: (val) => {
  //       if (val) {
  //         this.getEmployees();
  //       }
  //     }
  //   })
  // }

  // openAddEditEmployeeDialog() {
  //   const dialogRef = this.dialog.open(EmployeeComponent);
  //   dialogRef.afterClosed().subscribe({
  //     next: (val) => {
  //       if (val) {
  //         this.getEmployees();
  //       }
  //     }
  //   })
  // }

  employeeService = inject(EmployeeService);
  router = inject(Router);
  employees: Employee[] = [];



  ngOnInit() {
    this.getEmployees();
    // this.employeeService
    //   .getEmployees()
    //   .subscribe((data) => (this.employees = data));
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((data) => (this.employees = data))
  }

  goToCreate() {
    this.router.navigate(['/create']);
  }

  editEmployee(id: string) {
    this.router.navigate(['/edit', id]);
  }

  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
    // if (confirm('Are you sure you want to delete this employee?')) {
    //   this.employeeService.deleteEmployee(id).subscribe(() => {
    //     this.employees = this.employees.filter((emp) => emp.id !== id);
    //   });
    // }
  }
}
