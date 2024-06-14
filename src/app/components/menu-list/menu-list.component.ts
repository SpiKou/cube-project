import { Component } from '@angular/core';
import { Menu } from 'src/app/shared/interfaces/menu';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css'
})
export class MenuListComponent {
  menu : Menu[] = [
    { text: 'User Registration', routerLink: 'user-registration' },
  ];
}
