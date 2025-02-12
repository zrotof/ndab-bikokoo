import { Component } from '@angular/core';
import { HeroBannerTypeTwoComponent } from "../../shared/components/hero-banner-type-two/hero-banner-type-two.component";
import { HeroTypeTwo } from 'src/app/core/models/hero-type-two';

@Component({
  selector: 'app-feature-about',
  imports: [HeroBannerTypeTwoComponent],
  templateUrl: './feature-about.component.html',
  styleUrl: './feature-about.component.scss'
})
export class FeatureAboutComponent {

  protected readonly heroData: HeroTypeTwo = {
    image: '',
    title: 'À PROPOS',
    menus: [
      {
        label: "Accueil",
        url: "/"
      },
      {
        label: "À propos",
        url: ""

      }
    ]
  }
}
