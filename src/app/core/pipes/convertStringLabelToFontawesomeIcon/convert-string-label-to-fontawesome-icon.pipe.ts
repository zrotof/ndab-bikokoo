import { Pipe, PipeTransform } from '@angular/core';

import {
  faAngleDown,
  faAngleRight,
  faArrowRight,
  faCalendarDays,
  faChartLine,
  faCircleCheck,
  faClock,
  faDollarSign,
  faEnvelope,
  faLocationDot,
  faPlay,
  faPhone,
  faStar,
  faQuoteRight,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import {
  faInstagram,
  faFacebookF,
  faXTwitter,
  faWhatsapp,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import { IconDefinition } from '@fortawesome/angular-fontawesome';

@Pipe({
  name: 'convertStringLabelToFontawesomeIcon',
  standalone: true,
})
export class ConvertStringLabelToFontawesomeIconPipe implements PipeTransform {
  transform(value: string): IconDefinition {
    switch (value) {
      case 'faAngleDown':
        return faAngleDown;
      case 'faAngleRight':
        return faAngleRight
      case 'faArrowRight':
        return faArrowRight
      case 'faCalendarDays':
        return faCalendarDays;
      case 'faChartLine':
        return faChartLine
      case 'faCircleCheck':
        return faCircleCheck
      case 'faClock':
        return faClock
      case 'faDollarSign':
        return faDollarSign
      case 'faEnvelope':
        return faEnvelope;
      case 'faInstagram':
        return faInstagram;
      case 'faFacebookF':
        return faFacebookF;
      case 'faLocationDot':
        return faLocationDot;
      case 'faPlay':
        return faPlay
      case 'faPhone':
        return faPhone;
      case 'faStar':
        return faStar
      case 'faQuoteRight':
        return faQuoteRight;
      case 'faWhatsapp':
        return faWhatsapp
      case 'faXTwitter':
        return faXTwitter;
      case 'faYoutube':
        return faYoutube;
      default:
        return faUser;
    }
  }
}
