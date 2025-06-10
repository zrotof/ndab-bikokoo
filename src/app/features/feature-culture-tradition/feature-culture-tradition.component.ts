import { Component } from '@angular/core';
import { HeroTypeTwo } from 'src/app/core/models/hero-type-two';
import { HeroBannerTypeTwoComponent } from 'src/app/shared/components/hero-banner-type-two/hero-banner-type-two.component';
import { HeroComponent } from "./components/hero/hero.component";
import { CultureItemsComponent } from './components/culture-items/culture-items.component';

@Component({
  selector: 'app-feature-culture-tradition',
  templateUrl: './feature-culture-tradition.component.html',
  styleUrl: './feature-culture-tradition.component.scss',
  imports: [
    HeroBannerTypeTwoComponent,
    HeroComponent,
    CultureItemsComponent
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
      image: "/img/culture-tradition/histoire.jpeg",
      descritpion: "Comme de nombreux groupes au Cameroun, les Bassa’a ont été affectés par la colonisation européenne, ce qui a entraîné des changements sociaux et économiques importants. Depuis l’indépendance du Cameroun en 1960, les Bassa’a, comme les autres groupes ethniques, ont continué à jouer un rôle important dans le développement politique et économique du pays.",
      subtag: "D'Egypte à Ngog Lituba",
      subtitle: "Je me réconcilie avec mes origines",
      subDescription: "De tout leur ensemble, les Basa'a tirent leur origine de l'Egypte antique. Ils sont des descendants d'un ancêtre commun ; on les retrouve regroupés au sein de trois grandes familles. L'histoire raconte que c'est suite à une querelle familiale que le nom Basa'a, qui veut dire voit le jour.",
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
      image: "/img/culture-tradition/langue.jpeg",
      descritpion: "La langue principale du peuple Bassa’a est le Bassa’a, une langue bantoue. C’est une langue tonale avec des variations dialectales. Le Bassa’a utilise l’alphabet latin modifié pour son écriture, avec des diacritiques pour représenter les sons spécifiques. Il s'agit plus précisément de l'AGLC : l'Alphabet Général des Langues du Cameroun.",
      subtag: "Je parle le Basa'a",
      subtitle: "Proposer des ateliers",
      subDescription: "Je me suis inscris au prochain webnair Apprendre de Basa'a. Grace à Ndab Bikokoo, je peux de n'importe quelle localité, participer aux séminaires proposés par le parcours d'intégration culturelle. Les premières présentation présentent les modules d'apprentissage adaptés aux enfants et aux adulltes. J'ai hate de commencer.",
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
      image: "/img/culture-tradition/us.jpeg",
      descritpion: "La société Bassa’a est organisée autour des familles élargies et des clans. Les structures de parenté et les rôles de genre sont importants dans l’organisation sociale. Il existe des chefferies traditionnelles avec des chefs qui jouent un rôle dans la gestion des affaires communautaires et le maintien des traditions.",
      subtag: "Héritage culturel Basa'a",
      subtitle: "Évènements de la vie et cérémonies",
      subDescription: "Les us et coutumes se manifestent pour la plupart, sous forme de rites ancrés dans la culture locale. Ces rites sont des lieux d'expresssion diverses, de rapports sociaux, des logiques de milieux et de représentations dont les deux moteurs sont les croyances et les pratiques locales séculaires. En fait, ils sont une combinaison de savoirs organisés en pratiques, explicites ou implicites, se transmettant de générations en générations. C'est en général matérialisé par une mise en jeu du symbolique sous forme de cérémonie publique régulée par un groupe d'initiés",
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
      subtag: "J'approfondi mes connaissances",
      subtitle: "Proposer des ateliers",
      subDescription: "En cours de rédaction ...",
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
