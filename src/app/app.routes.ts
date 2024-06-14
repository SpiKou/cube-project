import { Routes } from '@angular/router';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { DepartmentComponent } from './components/department/department.component';
import { EmployeeComponent } from './components/employee/employee.component';

export const routes: Routes = [
    {
        path: 'user-registration',
        component: UserRegistrationComponent,
    }, 
    {
        path: 'department',
        component: DepartmentComponent,
    },
    {
        path: 'employee',
        component: EmployeeComponent,
    }
];
