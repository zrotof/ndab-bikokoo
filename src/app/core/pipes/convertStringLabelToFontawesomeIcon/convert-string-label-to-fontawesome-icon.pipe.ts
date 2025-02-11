import { Pipe, PipeTransform } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import {
  faFaceLaugh,
  faFaceMeh,
  faFaceMehBlank,
  faFaceSmile,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import {
  faCircleXmark
} from '@fortawesome/free-regular-svg-icons'

import {
  faFacebook
} from '@fortawesome/free-brands-svg-icons'
import { IconDefinition } from '@fortawesome/angular-fontawesome';

@Pipe({
  name: 'convertStringLabelToFontawesomeIcon',
  standalone: true
})
export class ConvertStringLabelToFontawesomeIconPipe implements PipeTransform {

  transform(value: string): IconProp {
    switch (value) {
      case 'faFaceLaugh':
        return faFaceLaugh as IconProp
      case 'faFaceMeh':
        return faFaceMeh as IconProp
      case 'faFaceMehBlank' : 
        return faFaceMehBlank as IconProp
      case 'faFaceSmile':
        return faFaceSmile as IconProp
      default:
        return faUser as IconProp
    }
  }

}
