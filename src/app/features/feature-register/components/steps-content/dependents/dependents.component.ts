import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-dependents',
  templateUrl: './dependents.component.html',
  styleUrl: './dependents.component.scss',
  imports: [
    ReactiveFormsModule,
    InputTextModule
  ],
})
export class DependentsComponent {

  private fb = inject(FormBuilder);

  form = this.fb.group({
    dependents: this.fb.array([
      this.createDependent(),
      this.createDependent()
    ]),
    sponsor: this.fb.group({
      name: ['', Validators.required],
      canton: ['', Validators.required],
      matricule: ['']
    })
  });

  createDependent(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      phone: [''],
      email: [''],
      relation: [''],
      country: [''],
      canton: [''],
      matricule: ['']
    });
  }

  get dependents(): FormArray {
    return this.form.get('dependents') as FormArray;
  }
}
