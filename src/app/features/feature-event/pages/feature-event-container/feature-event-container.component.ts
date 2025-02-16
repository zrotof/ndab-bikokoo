import { Component, OnInit } from '@angular/core';
import { HeroTypeTwo } from 'src/app/core/models/hero-type-two';
import { HeroBannerTypeTwoComponent } from 'src/app/shared/components/hero-banner-type-two/hero-banner-type-two.component';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/core/services/event.service';
import { Event } from 'src/app/core/models/events';
import { AsyncPipe } from '@angular/common';
import { EventItemComponent } from './components/event-item/event-item.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feature-event',
  imports: [HeroBannerTypeTwoComponent, AsyncPipe, EventItemComponent],
  templateUrl: './feature-event-container.component.html',
  styleUrl: './feature-event-container.component.scss',
})
export class FeatureEventContainerComponent implements OnInit {
  eventList$!: Observable<Event[]>;
  constructor(private eventService: EventService, private router: Router) {}

  protected readonly heroData: HeroTypeTwo = {
    image: '',
    title: 'ÉVÉNEMENTS',
    menus: [
      {
        label: 'Accueil',
        url: '/',
      },
      {
        label: 'Évènements',
        url: '/evenements',
      },
    ],
  };

  ngOnInit(): void {
    this.getEventList();
  }

  getEventList(): void {
    this.eventList$ = this.eventService.getEventList();
  }

  onEventClickHandler(id: number): void {
    this.router.navigate(['/evenements', id]);
  }
}
