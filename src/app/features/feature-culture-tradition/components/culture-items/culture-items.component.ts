import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

@Component({
  selector: 'app-culture-items',
  templateUrl: './culture-items.component.html',
  styleUrl: './culture-items.component.scss',
  imports: [
    NgOptimizedImage,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe,
  ]
})

export class CultureItemsComponent {
  services = input.required<any>();
}
