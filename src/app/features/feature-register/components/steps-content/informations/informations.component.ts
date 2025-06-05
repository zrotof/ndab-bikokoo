import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrl: './informations.component.scss',
  imports: [
    ReactiveFormsModule,
    InputTextModule
  ],
})
export class InformationsComponent {

  private fb = inject(FormBuilder);

  informationForm = this.fb.group({
    lastname: ['', Validators.required],
    firstname: ['', Validators.required],
    maritalname: [''],
    sex: ["", Validators.required],
    address: ['', Validators.required],
    birthdate: ['', Validators.required],
    country: ["", Validators.required],
    phone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });
}
