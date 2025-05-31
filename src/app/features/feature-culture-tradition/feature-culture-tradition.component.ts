import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeroTypeTwo } from 'src/app/core/models/hero-type-two';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { HeroBannerTypeTwoComponent } from 'src/app/shared/components/hero-banner-type-two/hero-banner-type-two.component';
import { TwoEqualSideBlocsComponent } from "../../shared/components/two-equal-side-blocs/two-equal-side-blocs.component";
import { ServiceItemComponent } from "../../shared/components/service-item/service-item.component";

@Component({
  selector: 'app-feature-culture-tradition',
  templateUrl: './feature-culture-tradition.component.html',
  styleUrl: './feature-culture-tradition.component.scss',
  imports: [
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe,
    HeroBannerTypeTwoComponent,
    TwoEqualSideBlocsComponent,
    ServiceItemComponent
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
}
