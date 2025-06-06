import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { SOCIAL_MEDIA } from 'src/app/shared/constants/social-media.constants';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrl: './bottom.component.scss',
    imports: [
      RouterLink,
      FontAwesomeModule,
      ConvertStringLabelToFontawesomeIconPipe
    ],

})

export class BottomComponent {
  protected readonly networks = SOCIAL_MEDIA;

}
