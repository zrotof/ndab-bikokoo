import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeroTypeTwo } from 'src/app/core/models/hero-type-two';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { HeroBannerTypeTwoComponent } from 'src/app/shared/components/hero-banner-type-two/hero-banner-type-two.component';

@Component({
  selector: 'app-feature-dances',
  templateUrl: './feature-dances.component.html',
  styleUrl: './feature-dances.component.scss',
  imports: [
    NgOptimizedImage,
    HeroBannerTypeTwoComponent,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ],
})

export class FeatureDancesComponent {

  protected readonly heroData: HeroTypeTwo = {
    image: '/img/events/secondary-hero-houses.jpeg',
    title: 'Nos Danses',
    menus: [
      {
        label: 'Accueil',
        url: '/',
      },
      {
        label: 'Nos Danses',
        url: '',
      },
    ],
  };


  protected readonly dances = [
    {
      title: "Assiko",
      image: "/img/dances/assiko.jpg",
      intro: "Le mot Assiko vient probablement de siko, qui signifie « secouer » ou « bouger avec énergie. C'est une danse traditionnelle originaire du peuple Bassa au Cameroun, particulièrement répandue dans les régions du Littoral (Douala, Edea, etc.). C’est bien plus qu’une danse : c’est une expression culturelle riche, mêlant musique, danse, costumes, et poésie. Elle est énergique et rapide, avec beaucoup de mouvements de hanches, d’épaules et de jambes. C’est une danse qui célèbre la vie, la joie, et l’endurance. Elle est souvent dansée lors de fêtes traditionnelles, mariages, cérémonies ou veillées.",
      instruments: [
        "Guitare sèche",
        "Tômbâ",
        "Maracas ou cloche en fer",
        "Balafon"
      ],
      dress: [
        {
          type: "Femme",
          image: "",
          items: [
            "Un pagne en tissu traditionnel (souvent wax ou tissu local), noué autour de la taille, parfois court pour laisser voir le mouvement des jambes.",
            "Portée autour des hanches pour mettre en valeur les mouvements du bassin pendant la danse.",
            "Un petit haut (bustier, brassière ou blouse simple), souvent coloré et assorti au pagne.",
            "Colliers, bracelets, boucles d’oreilles, souvent faits de perles ou de matières naturelles.",
            "Cheveux nattés ou attachés, parfois décorés de perles ou tissus."
          ]
        }
      ],
      musics: [
        {
          image: "/img/dances/assiko.jpg",
          artist: "Bikoko Aladin",
          titre: "Le pape de l'assiko",
          video: ""
        },
        {
          image: "/img/dances/assiko.jpg",
          artist: "Bikoko Aladin",
          titre: "Le pape de l'assiko",
          video: ""
        },
        {
          image: "/img/dances/assiko.jpg",
          artist: "Bikoko Aladin",
          titre: "Le pape de l'assiko",
          video: ""
        },
        {
          image: "/img/dances/assiko.jpg",
          artist: "Bikoko Aladin",
          titre: "Le pape de l'assiko",
          video: ""
        },
        {
          image: "/img/dances/assiko.jpg",
          artist: "Bikoko Aladin",
          titre: "Le pape de l'assiko",
          video: ""
        }
      ]
    }
  ]
}
