import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SOCIAL_MEDIA } from 'src/app/shared/constants/social-media.constants';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-top',
  templateUrl: './contact-top.component.html',
  styleUrl: './contact-top.component.scss',
  imports: [
    RouterLink,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe,
    InputTextModule,
    TextareaModule
  ]
})

export class ContactTopComponent {
  protected readonly networks = SOCIAL_MEDIA;

  protected readonly contactWays = [
    {
      label: "Ndab Bikoko Europe",
      phone : "(+32) 123456789",
      email: "europe@ndadp-bikoko.com"
    },
    {
      label: "Ndab Bikoko Asie",
      phone : "(+32) 123456789",
      email: "asia@ndadp-bikoko.com"
    },
    {
      label: "Ndab Bikoko Amérique",
      phone : "(+32) 123456789",
      email: "america@ndadp-bikoko.com"
    },
    {
      label: "Ndab Bikoko Truc truc",
      phone : "(+32) 123456789",
      email: "truc@ndadp-bikoko.com"
    }
  ]
}
