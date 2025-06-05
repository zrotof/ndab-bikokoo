import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from '../../pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { SOCIAL_MEDIA } from 'src/app/shared/constants/social-media.constants';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.scss',
  imports: [
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ]
})

export class TopHeaderComponent {

  protected readonly networks = SOCIAL_MEDIA;
}
