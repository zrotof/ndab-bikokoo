import { NgOptimizedImage } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { PhoneNumberService } from 'src/app/core/services/phone-number.service';
import { COUNTRY_FLAGS_AND_DIAL_CODES } from 'src/app/shared/constants/country-flags-and-dial-codes';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrl: './top.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgOptimizedImage,
    ReactiveFormsModule,
    InputNumberModule,
    SelectModule,
  ]
})

export class TopComponent {

   protected readonly COUNTRY_FLAGS_AND_DIAL_CODES = COUNTRY_FLAGS_AND_DIAL_CODES

  private fb = inject(FormBuilder);
  private phoneNumberService = inject(PhoneNumberService);

  protected subscriberForm = this.fb.group({
    selectedCountry: [this.COUNTRY_FLAGS_AND_DIAL_CODES[0]],
    phone: ["", Validators.required]
  })

    onNewsSubscribe() : void{

    if(this.subscriberForm.invalid){
      return ;
    }

    const phone = this.subscriberForm.controls.selectedCountry.value?.dialCode! +" "+ this.subscriberForm.controls.phone.value!;
    this.phoneNumberService.savePhoneNumber(phone).subscribe({
      next: (res : any) => {
        console.log(res)
      },
      error: (res : any) => {

      }
    })
  }

}
