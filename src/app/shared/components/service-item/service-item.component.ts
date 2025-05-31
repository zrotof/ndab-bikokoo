import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrl: './service-item.component.scss',
  imports: [
    NgOptimizedImage,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ],
})

export class ServiceItemComponent {

}
