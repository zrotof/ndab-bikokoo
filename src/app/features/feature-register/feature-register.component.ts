import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StepperModule } from 'primeng/stepper';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { InputTextModule } from 'primeng/inputtext';
import { InformationsComponent } from './components/steps-content/informations/informations.component';
import { TopHeaderComponent } from 'src/app/core/components/top-header/top-header.component';
import { StepsMenuComponent } from './components/steps-menu/steps-menu.component';
import { PaiementComponent } from './components/steps-content/paiement/paiement.component';
import { DependentsComponent } from './components/steps-content/dependents/dependents.component';

@Component({
  selector: 'app-feature-register',
  templateUrl: './feature-register.component.html',
  styleUrl: './feature-register.component.scss',
  imports: [
    CommonModule,
    StepperModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgOptimizedImage,
    ConvertStringLabelToFontawesomeIconPipe,
    InputTextModule,
    TopHeaderComponent,
    StepsMenuComponent,
    InformationsComponent,
    DependentsComponent,
    PaiementComponent
  ]
})
export class FeatureRegisterComponent {
  protected steps = [
    {
      name: "Vos personnelles",
      order: 1,
      isCompleted: true
    },
    {
      name: "Ayants-droit & Parrain",
      order: 2,
      isCompleted: false
    },
    {
      name: "Engagement & Paiement",
      order: 3,
      isCompleted: false
    }
  ]

  currentStepIndex = 1;

  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({

      // Étape 2
      dependents: this.fb.array([
        this.createDependent(),
        this.createDependent()
      ]),
      sponsor: this.fb.group({
        name: ['', Validators.required],
        canton: ['', Validators.required],
        matricule: ['']
      }),
      // Étape 3
      commitment: this.fb.group({
        amount: ['', Validators.required],
        paymentMethod: ['', Validators.required],
        reserve: ['', Validators.required],
        place: ['', Validators.required],
        date: ['', Validators.required]
      })
    });
  }

  createDependent(): FormGroup {
    return this.fb.group({
      name: [''],
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

  nextStep() {
  if (this.currentStepIndex < this.steps.length ) {
    this.steps[this.currentStepIndex - 1].isCompleted = true;
    this.currentStepIndex++;
  }
}

previousStep() {
  if (this.currentStepIndex > 0) {
    this.currentStepIndex--;
  }
}

  onSubmit() {
    if (this.form.valid) {
      console.log('Formulaire soumis', this.form.value);
    } else {
      console.log('Formulaire invalide');
    }
  }
}
