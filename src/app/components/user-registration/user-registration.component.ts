import { Component, ViewEncapsulation, inject } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from 'src/app/shared/services/user.service';
import { first } from 'rxjs';
import { User } from 'src/app/shared/interfaces/user';


@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    FormsModule
  ],
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  userService = inject(UserService);

  registrationStatus: { success: boolean; message: string } = {
    success: false,
    message: 'Not attempted yet',
  };

  form = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
  },
  this.passwordConfirmValidator,
);

  passwordConfirmValidator(form: FormGroup) {
    if (form.get('password').value !==form.get('confirmPassword').value) {
      form.get('confirmPassword').setErrors({passwordMismatch: true});
      return {passwordMismatch: true};
    }
    return {}
  }

  onSubmit(value:any) {
    console.log(value);

    const user = this.form.value as User;
    delete user['confirmPassword'];

    this.userService.registerUser(user).subscribe({
      next: (response) => {
        console.log('User registered', response.msg);
        this.registrationStatus = { success: true, message: response.msg };
      },
      error: (response) => {
        const message = response.error.msg;
        console.log('Error registering user', message);
        this.registrationStatus = { success: false, message };
      },
    });
  }

  check_duplicate_email() {
    const email = this.form.get('email').value;

    this.userService.check_duplicate_email(email).subscribe({
      next: (response) => {
        console.log(response.msg);
        this.form.get('email').setErrors(null);
      },
      error: (response) => {
        console.log(response.error.msg);
        this.form.get('email').setErrors({duplicateEmail: true});
      },
    });
  }
}
