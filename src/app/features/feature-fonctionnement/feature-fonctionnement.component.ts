import { Component } from '@angular/core';
import { HeroBannerTypeTwoComponent } from "../../shared/components/hero-banner-type-two/hero-banner-type-two.component";
import { HeroTypeTwo } from 'src/app/core/models/hero-type-two';

@Component({
  selector: 'app-feature-fonctionnement',
  templateUrl: './feature-fonctionnement.component.html',
  styleUrl: './feature-fonctionnement.component.scss',
  imports: [
    HeroBannerTypeTwoComponent
  ]
})

export class FeatureFonctionnementComponent {

  protected readonly heroData: HeroTypeTwo = {
    image: '/img/events/secondary-hero-houses.jpeg',
    title: 'ORGANIGRAMME',
    menus: [
      {
        label: 'Accueil',
        url: '/',
      },
      {
        label: 'Fonctionnement',
        url: '/',
      },
    ],
  };
}
