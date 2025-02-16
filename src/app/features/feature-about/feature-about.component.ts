import { Component } from '@angular/core';
import { HeroBannerTypeTwoComponent } from "../../shared/components/hero-banner-type-two/hero-banner-type-two.component";
import { HeroTypeTwo } from 'src/app/core/models/hero-type-two';
import { TopAboutComponent } from "./components/top-about/top-about.component";
import { HistoryTargetComponent } from "./components/history-target/history-target.component";
import { OurTeamComponent } from "./components/our-team/our-team.component";
import { SomeStatsComponent } from "./components/some-stats/some-stats.component";

@Component({
  selector: 'app-feature-about',
  templateUrl: './feature-about.component.html',
  styleUrl: './feature-about.component.scss',
  imports: [
    HeroBannerTypeTwoComponent,
    TopAboutComponent,
    HistoryTargetComponent,
    OurTeamComponent,
    SomeStatsComponent
]
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
