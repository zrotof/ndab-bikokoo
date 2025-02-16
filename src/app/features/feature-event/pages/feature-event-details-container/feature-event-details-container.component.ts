import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Event } from 'src/app/core/models/events';
import { HeroTypeTwo } from 'src/app/core/models/hero-type-two';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';
import { EventService } from 'src/app/core/services/event.service';
import { HeroBannerTypeTwoComponent } from 'src/app/shared/components/hero-banner-type-two/hero-banner-type-two.component';

@Component({
  selector: 'app-feature-event-details-container',
  imports: [
    HeroBannerTypeTwoComponent,
    ConvertStringLabelToFontawesomeIconPipe,
    FontAwesomeModule,
  ],
  templateUrl: './feature-event-details-container.component.html',
  styleUrl: './feature-event-details-container.component.scss',
})
export class FeatureEventDetailsContainerComponent {
  @Input() id!: string;
  eventDetail!: Event;
  constructor(private eventService: EventService) {}

  protected heroData!: HeroTypeTwo;

  ngOnInit(): void {
    this.getEventDetailById(+this.id);
  }

  getEventDetailById(id: number): void {
    this.eventService.getEventById(id).subscribe({
      next: (result) => {
        this.eventDetail = result;
        this.heroData = {
          image: this.eventDetail.coverImage,
          title: 'Évènements',
          menus: [
            {
              label: 'Accueil',
              url: '/',
            },
            {
              label: 'Évènements',
              url: '/evenements',
            },
            {
              label: this.eventDetail.title,
              url: '',
            },
          ],
        };
      },
    });
  }
}
