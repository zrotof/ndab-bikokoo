import { Component } from '@angular/core';
import { ServiceItemComponent } from './components/service-item/service-item.component';
import { HeroTypeTwo } from 'src/app/core/models/hero-type-two';
import { HeroBannerTypeTwoComponent } from 'src/app/shared/components/hero-banner-type-two/hero-banner-type-two.component';

@Component({
  selector: 'app-feature-our-offer',
  templateUrl: './feature-our-offer.component.html',
  styleUrl: './feature-our-offer.component.scss',
  imports: [
    HeroBannerTypeTwoComponent,
    ServiceItemComponent
  ]
})

export class FeatureOurOfferComponent {

  protected readonly heroData: HeroTypeTwo = {
    image: '/img/events/secondary-hero-houses.jpeg',
    title: 'NOTRE OFFRE',
    menus: [
      {
        label: 'Accueil',
        url: '/'
      },
      {
        label: 'Notre offre',
        url: '/'
      },
    ],
  };
  
}
