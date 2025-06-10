import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { HeroTypeTwo } from 'src/app/core/models/hero-type-two';
import { HeroBannerTypeTwoComponent } from 'src/app/shared/components/hero-banner-type-two/hero-banner-type-two.component';

@Component({
  selector: 'app-organizational',
  templateUrl: './organizational.component.html',
  styleUrl: './organizational.component.scss',
  imports: [
    NgOptimizedImage,
    HeroBannerTypeTwoComponent
  ],
})

export class OrganizationalComponent {

  protected readonly heroData: HeroTypeTwo = {
    image: '/img/events/secondary-hero-houses.jpeg',
    title: 'ORGANIGRAMME',
    menus: [
      {
        label: 'Accueil',
        url: '/',
      },
      {
        label: 'Évênements',
        url: '/evenements',
      },
    ],
  };

  protected tabs = [
    {
      label: "L'instance Dirigeante",
      isActive: true
    },
    {
      label: "Le Conseil Batat Ndab",
      isActive: false
    },
    {
      label: "Le Conseil Dikoo Di Mbok",
      isActive: false
    },
    {
      label: "Les Administrateurs",
      isActive: false
    },
    {
      label: "Bakèna Matunga",
      isActive: false
    }
  ]

  protected currentIndexTabContent = 0;

  onTabClicked(index : number): void {
    if (this.tabs[index].isActive != true) {
      this.tabs.forEach(tab => tab.isActive = false)
      this.tabs[index].isActive = true;
      this.currentIndexTabContent = index;
    }
  }
}
