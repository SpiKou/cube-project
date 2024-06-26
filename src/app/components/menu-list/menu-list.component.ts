import { Component } from '@angular/core';
import { Menu } from 'src/app/shared/interfaces/menu';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css'
})
export class MenuListComponent {
  menu : Menu[] = [
    { text: 'Department', routerLink: 'department' },
    { text: 'Employee', routerLink: 'employee' },
  ];
}
