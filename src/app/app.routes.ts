import { Routes } from '@angular/router';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { DepartmentComponent } from './components/department/department.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { LoginComponent } from './components/login/login.component';

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
    },
    {
        path: 'menu-list',
        component: MenuListComponent,
    },
    {
        path: 'navbar',
        component: NavbarComponent,
    },
    {
        path: 'dropdown',
        component: DropdownComponent,
    },
    {
        path: 'login', 
        component: LoginComponent,
    },
];
