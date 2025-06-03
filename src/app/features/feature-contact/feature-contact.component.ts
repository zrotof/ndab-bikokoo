import { Component } from '@angular/core';
import { HeroTypeTwo } from 'src/app/core/models/hero-type-two';
import { NgOptimizedImage } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

@Component({
  selector: 'app-feature-contact',
  templateUrl: './feature-contact.component.html',
  styleUrl: './feature-contact.component.scss',
  imports: [
    NgOptimizedImage,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe,
    InputTextModule,
    TextareaModule
  ]
})

export class FeatureContactComponent {

  protected readonly heroData: HeroTypeTwo = {
    image: '',
    title: 'Contactez-Nous',
    menus: [
      {
        label: "Accueil",
        url: "/"
      },
      {
        label: "Contact",
        url: ""

      }
    ]
  }

  protected readonly contactWays = [
    {
      icon: "faEnvelope",
      value: "contact@ndabbikokoo.com"
    },
    {
      icon: "faWhatsapp",
      value: "+49 179 7510920"
    },
    {
      icon: "faLocationDot",
      value: "Hermann-Albertz-Straße 218 46045 Oberhausen Deutschland (Germany)"
    }
  ]
}
