import { Component } from '@angular/core';
import { Menu } from 'src/app/shared/interfaces/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css'
})
export class MenuListComponent {
  menu : Menu[] = [
    { text: 'Login', routerLink: 'login' },
    { text: 'Register', routerLink: 'user-registration'},
    { text: 'Employee', routerLink: 'employee' },
  ];
}
