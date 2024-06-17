import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Credentials, LoggedInUser } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userService = inject(UserService);
  router = inject(Router);

  invalidLogin = false;

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  onSubmit() {
    const credentials = this.form.value as Credentials;
    this.userService.loginUser(credentials).subscribe({
      next: (response) => {
        const access_token = response.access_token;
        localStorage.setItem('access_token', access_token);
        const decodedTokenSubject = jwtDecode(access_token).sub as unknown as LoggedInUser

        this.userService.user.set({
          fullName: decodedTokenSubject.fullName,
          email: decodedTokenSubject.email,
        });
      },
      error: (response) => {
        console.error('Login Error', response);
        this.invalidLogin = true;
      },
      
    });
  }

  clickButton() {
    this.router.navigate(['/user-registration']);
  }
}
