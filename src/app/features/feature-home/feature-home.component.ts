import { Component } from '@angular/core';
import { SwipingHeroBannerComponent } from "./components/swiping-hero-banner/swiping-hero-banner.component";
import { PresidentWordsComponent } from "./components/president-words/president-words.component";
import { NextEventsComponent } from "./components/next-events/next-events.component";
import { FaqComponent } from "./components/faq/faq.component";
import { JoinBannerComponent } from "../../shared/components/join-banner/join-banner.component";
import { TestimoniesComponent } from './components/testimonies/testimonies.component';

@Component({
  selector: 'app-feature-home',
  templateUrl: './feature-home.component.html',
  styleUrl: './feature-home.component.scss',
  imports: [
    SwipingHeroBannerComponent,
    PresidentWordsComponent,
    NextEventsComponent,
    FaqComponent,
    JoinBannerComponent,
    TestimoniesComponent
]
})

export class FeatureHomeComponent {

}
