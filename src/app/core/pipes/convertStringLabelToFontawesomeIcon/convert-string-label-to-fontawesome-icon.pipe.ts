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

@Pipe({
  name: 'convertStringLabelToFontawesomeIcon',
  standalone: true
})
export class ConvertStringLabelToFontawesomeIconPipe implements PipeTransform {

  transform(value: string): IconProp {
    switch (value) {
      case 'faFaceLaugh':
        return faFaceLaugh
      case 'faFaceMeh':
        return faFaceMeh
      case 'faFaceMehBlank' : 
        return faFaceMehBlank
      case 'faFaceSmile':
        return faFaceSmile
      default:
        return faUser;
    }
  }

}
