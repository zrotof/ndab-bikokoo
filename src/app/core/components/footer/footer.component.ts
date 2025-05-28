import { Component, inject, ViewEncapsulation } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SOCIAL_MEDIA } from 'src/app/shared/constants/social-media.constants';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { COUNTRY_FLAGS_AND_DIAL_CODES } from 'src/app/shared/constants/country-flags-and-dial-codes';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgOptimizedImage,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe,
    RouterLink,
    ReactiveFormsModule,
    InputNumberModule,
    SelectModule
  ]
})

export class FooterComponent {
  protected readonly COUNTRY_FLAGS_AND_DIAL_CODES = COUNTRY_FLAGS_AND_DIAL_CODES
  protected readonly networks = SOCIAL_MEDIA;

  private fb = inject(FormBuilder);
  
  protected subscriberForm = this.fb.group({
    selectedCountry: [this.COUNTRY_FLAGS_AND_DIAL_CODES[0]],
    phone: ["", Validators.required]
  })

}
