import { Component } from '@angular/core';
import { ContactTopComponent } from "./components/contact-top/contact-top.component";
import { JoinBannerComponent } from "../../shared/components/join-banner/join-banner.component";
import { HeroBannerTypeTwoComponent } from "../../shared/components/hero-banner-type-two/hero-banner-type-two.component";
import { HeroTypeTwo } from 'src/app/core/models/hero-type-two';

@Component({
  selector: 'app-feature-contact',
  templateUrl: './feature-contact.component.html',
  styleUrl: './feature-contact.component.scss',
  imports: [
    ContactTopComponent,
    JoinBannerComponent,
    HeroBannerTypeTwoComponent
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
}
