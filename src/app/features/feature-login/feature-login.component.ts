import { NgOptimizedImage } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

@Component({
  selector: 'app-feature-login',
  templateUrl: './feature-login.component.html',
  styleUrl: './feature-login.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgOptimizedImage,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    RouterLink,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ],
})
export class FeatureLoginComponent {

  private fb = inject(FormBuilder);

  loginForm = this.fb.group({
    username : ["", Validators.required],
    password : ["", Validators.required]
  })

  onSubmit(): void {
    
  }
}
