import { Component, inject, input } from '@angular/core';
import { HeroBannerTypeTwoComponent } from "../../shared/components/hero-banner-type-two/hero-banner-type-two.component";
import { HeroTypeTwo } from 'src/app/core/models/hero-type-two';
import { Router } from '@angular/router';
import { TwoEqualSideBlocsComponent } from 'src/app/features/feature-about/components/two-equal-side-blocs/two-equal-side-blocs.component';
import { TopAboutComponent } from "./components/top-about/top-about.component";

@Component({
  selector: 'app-feature-about',
  templateUrl: './feature-about.component.html',
  styleUrl: './feature-about.component.scss',
  imports: [
    HeroBannerTypeTwoComponent,
    TwoEqualSideBlocsComponent,
    TopAboutComponent
]
})

export class FeatureAboutComponent {

  section = input<string>();
  private readonly router = inject(Router);

  protected readonly heroData: HeroTypeTwo = {
    image: '/img/dances/assiko.jpg',
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
