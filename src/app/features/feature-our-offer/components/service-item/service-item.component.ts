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

  protected readonly testimonies = [
    {
      title:"La garantie d'assistance",
      message: "La famille endeuillée est vraiment au cœur de l'action de Ndab Bìkokoo Pil-Gweha. J'ai vraiment ressenti que la volonté de mon défunt papa, a été respectée lorsqu'une délégation du mouvement est venu pour me remettre l'enveloppe de solidarité.",
      name: "Nyango Ngo Y.",
      place: "Membre en France",
      image: "/img/our-offer/testimonies/nyango.jpeg"
    },
    {
      title:"La mise à disposition rapide",
      message: "Ce qui m'a agréablement surpris, c'est le délai entre le moment ou j'annonce le décès de ma grand-mère, et le jour où je reçois l'aide solidaire. En à peine 10 jours, j'ai engagé l'ensemble des étapes du processus funéraire ; que j'ai pu financer jusqu'à la mise en sépulture.",
      name: "Ndjombi T.",
      place: "Membre aux Etats-Unis",
      image: "/img/our-offer/testimonies/nyango.jpeg"
    }
  ]
}
