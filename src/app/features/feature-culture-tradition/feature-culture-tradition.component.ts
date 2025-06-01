import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeroTypeTwo } from 'src/app/core/models/hero-type-two';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { HeroBannerTypeTwoComponent } from 'src/app/shared/components/hero-banner-type-two/hero-banner-type-two.component';
import { TwoEqualSideBlocsComponent } from "../../shared/components/two-equal-side-blocs/two-equal-side-blocs.component";
import { ServiceItemComponent } from "../../shared/components/service-item/service-item.component";
import { NgOptimizedImage } from '@angular/common';
import { HeroComponent } from "./components/hero/hero.component";

@Component({
  selector: 'app-feature-culture-tradition',
  templateUrl: './feature-culture-tradition.component.html',
  styleUrl: './feature-culture-tradition.component.scss',
  imports: [
    NgOptimizedImage,
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe,
    HeroBannerTypeTwoComponent,
    HeroComponent,
    TwoEqualSideBlocsComponent,
    ServiceItemComponent,
  ],
})
export class FeatureCultureTraditionComponent {

  protected readonly heroData: HeroTypeTwo = {
    image: '/img/dances/assiko.jpg',
    title: 'CULTURE ET TRADITION',
    menus: [
      {
        label: "Accueil",
        url: "/"
      },
      {
        label: "Culture et tradition",
        url: ""
      }
    ]
  }

  protected readonly services = [
    {
      tag: "Notre parcours d'intégration culturelle",
      title: "Notre histoire",
      image: "/img/about/team/4.jpeg",
      descritpion: "Comme de nombreux groupes au Cameroun, les Bassa’a ont été affectés par la colonisation européenne, ce qui a entraîné des changements sociaux et économiques importants. Depuis l’indépendance du Cameroun en 1960, les Bassa’a, comme les autres groupes ethniques, ont continué à jouer un rôle important dans le développement politique et économique du pays.",
      subtag: "J'ai pu gagner des marchés",
      subtitle: "Proposer des services",
      subDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, doloremque! Nihil earum.",
      links: [
        {
          label: "Origine", link: ""
        },
        {
          label: "Migration", link: ""
        },
        {
          label: "Généalogie", link: ""
        },
        {
          label: "Sites d'implantation", link: ""
        },
        {
          label: "Figures historiques", link: ""
        },
        {
          label: "Organisation sociale", link: ""
        },
        {
          label: "Les confréries", link: ""
        }
      ]
    },
    {
      tag: "Notre parcours d'intégration culturelle",
      title: "Nos Langues",
      image: "/img/about/team/2.jpeg",
      descritpion: "La langue principale du peuple Bassa’a est le Bassa’a, une langue bantoue. C’est une langue tonale avec des variations dialectales. Le Bassa’a utilise l’alphabet latin modifié pour son écriture, avec des diacritiques pour représenter les sons spécifiques. Il s'agit plus précisément de l'AGLC : l'Alphabet Général des Langues du Cameroun.",
      subtag: "J'ai pu gagner des marchés",
      subtitle: "Proposer des services",
      subDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, doloremque!",
      links: [
        {
          label: "⁠Ɓàsà’a (Mbɛ́nɛ)", link: ""
        },
        {
          label: "⁠Ɓakóko", link: ""
        },
        {
          label: "⁠Ɓàti", link: ""
        },
        {
          label: "⁠Etc…", link: ""
        }
      ]
    },
    {
      tag: "Notre parcours d'intégration culturelle",
      title: "Nos Us et coutumes",
      image: "/img/about/team/2.jpeg",
      descritpion: "La société Bassa’a est organisée autour des familles élargies et des clans. Les structures de parenté et les rôles de genre sont importants dans l’organisation sociale. Il existe des chefferies traditionnelles avec des chefs qui jouent un rôle dans la gestion des affaires communautaires et le maintien des traditions.",
      subtag: "J'ai pu gagner des marchés",
      subtitle: "Proposer des services",
      subDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, doloremque! Nihil earum, illum explicabo aspernatur adipisci fugiat inventore maxime pariatur accusantium expedita ut dolorum quisquam sint. Distinctio aliquid temporibus praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facilis cupiditate voluptate eum minus numquam.",
      links: [
        {
          label: "La Naissance", link: ""
        },
        {
          label: "Le Mariage", link: ""
        },
        {
          label: "Les Funéraille", link: ""
        },
        {
          label: "Les interdits", link: ""
        },
        {
          label: "La médecine", link: ""
        },
        {
          label: "Les cultes", link: ""
        },
        {
          label: "Etc...", link: ""
        }
      ]
    },
    {
      tag: "Notre parcours d'intégration culturelle",
      title: "Nos Arts",
      image: "/img/about/team/3.jpeg",
      descritpion: "Les Bassa utilisaient le chant, la chanson et les complaintes pour raconter leurs exploits. La danse était toujours associée au chant ; aussi il y avait plusieurs instruments musicaux permettant d'épouser les danses y afférentes.",
      subtag: "J'ai pu gagner des marchés",
      subtitle: "Proposer des services",
      subDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, doloremque! Nihil earum, illum explicabo aspernatur adipisci fugiat inventore maxime pariatur accusantium expedita ut dolorum quisquam sint. Distinctio aliquid temporibus praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facilis cupiditate voluptate eum minus numquam.",
      links: [
        {
          label: "La Musique (danses, …)", link: ""
        },
        {
          label: "Le Gastronomie (cuisine, ….)", link: ""
        },
        {
          label: "La Mode", link: ""
        },
        {
          label: "La Chasse et Pèche", link: ""
        },
        {
          label: "Etc…", link: ""
        }
      ]
    }
  ]
}
