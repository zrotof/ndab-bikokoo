import { Component } from '@angular/core';
import { HeroBannerTypeTwoComponent } from "../../shared/components/hero-banner-type-two/hero-banner-type-two.component";
import { HeroTypeTwo } from 'src/app/core/models/hero-type-two';
import { WhyJoinComponent } from './components/why-join/why-join.component';
import { InscriptionProcessComponent } from "./components/inscription-process/inscription-process.component";
import { WhoCanJoinComponent } from './components/who-can-join/who-can-join.component';
import { JoinComponent } from './components/join/join.component';

@Component({
  selector: 'app-feature-engage',
  templateUrl: './feature-engage.component.html',
  styleUrl: './feature-engage.component.scss',
    imports: [
    HeroBannerTypeTwoComponent,
    WhyJoinComponent,
    WhoCanJoinComponent,
    InscriptionProcessComponent,
    JoinComponent
],
})

export class FeatureEngageComponent {

   protected readonly heroData: HeroTypeTwo = {
      image: '/img/events/secondary-hero-houses.jpeg',
      title: "S'ENGAGER",
      menus: [
        {
          label: 'Accueil',
          url: '/',
        },
        {
          label: 'La Maison',
          url: '/sengager',
        },
      ],
    };
}
