import { Pipe, PipeTransform } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import {
  faCalendarDays,
  faEnvelope,
  faLocationDot,
  faPhone,
  faQuoteRight,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import {
  faInstagram,
  faFacebookF,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

@Pipe({
  name: 'convertStringLabelToFontawesomeIcon',
  standalone: true,
})
export class ConvertStringLabelToFontawesomeIconPipe implements PipeTransform {
  transform(value: string): IconProp {
    switch (value) {
      case 'faCalendarDays':
        return faCalendarDays as IconProp;
      case 'faEnvelope':
        return faEnvelope as IconProp;
      case 'faInstagram':
        return faInstagram as IconProp;
      case 'faFacebookF':
        return faFacebookF as IconProp;
      case 'faLocationDot':
        return faLocationDot as IconProp;
      case 'faPhone':
        return faPhone as IconProp;
      case 'faQuoteRight':
        return faQuoteRight as IconProp;
      case 'faXTwitter':
        return faXTwitter as IconProp;
      case 'faYoutube':
        return faYoutube as IconProp;
      default:
        return faUser as IconProp;
    }
  }
}
