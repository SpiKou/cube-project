import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatOption, MatSelect } from '@angular/material/select';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-add-edit',
  standalone: true,
  imports: [
    // MatLabel,
    // MatFormField,
    // MatRadioModule,
    // MatFormFieldModule,
    // MatSelect,
    // MatOption,
    // MatDialogModule,
    ReactiveFormsModule,
  ],
  templateUrl: './employee-add-edit.component.html',
  styleUrl: './employee-add-edit.component.css'
})
export class EmployeeAddEditComponent {
  employeeForm: FormGroup;
  isEdit = false;
  employeeId: string | null = null;

  fb = inject(FormBuilder);
  employeeService = inject(EmployeeService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  constructor() {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.isEdit = true;
        this.employeeId = id;
        this.employeeService.getEmployee(this.employeeId).subscribe((data) => {
          this.employeeForm.patchValue(data);
        });
      }
    })
  }

  onSubmit() {
    if (this.employeeForm.invalid) return;

    if (this.isEdit && this.employeeId) {
      this.employeeService
      .updateEmployee(this.employeeId, this.employeeForm.value)
      .subscribe(() => {
        this.router.navigate(['/'])
      });
    } else {
      this.employeeService
      .createEmployee(this.employeeForm.value)
      .subscribe(() => {
        this.router.navigate(['/'])
      });
    }
  }

//   constructor( 
//     private employeeService: EmployeeService,
//     private dialogRef: MatDialogRef<EmployeeAddEditComponent>,
//     private formBuilder: FormBuilder,
//     @Inject(MAT_DIALOG_DATA) public data: any,
//   ) {
//     this.employeeForm = this.formBuilder.group({
//       'name': ['', Validators.required],
//       'position': ['', Validators.required],
//     })
//   }

//   ngOnInit(): void {
//     this.employeeForm.patchValue(this.data);
//   }

//   onSubmit() {
//     if (this.employeeForm.valid) {
//       if (this.data) {
//         this.employeeService
//         .updateEmployee(this.data.id, this.employeeForm.value)
//         .subscribe({
//           next: (val: any) => {
//             alert('Employee updated successfully');
//             this.dialogRef.close(true);
//           },
//           error: (err: any) => {
//             console.error(err);
//             alert('Error updating employee');
//         },
//       });
//       } else {
//         this.employeeService
//         .addEmployee(this.employeeForm.value)
//         .subscribe({
//           next: (val: any) => {
//             alert('Employee added successfully');
//             this.employeeForm.reset();
//             this.dialogRef.close(true);
//           },
//           error: (err: any) => {
//             console.error(err);
//             alert('Error adding employee');
//           },
//         });
//       }
//     }
//   }
// }
// function ngOnInit() {
//   throw new Error('Function not implemented.');
}

