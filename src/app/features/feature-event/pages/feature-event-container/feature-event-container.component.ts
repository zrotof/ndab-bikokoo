import { Component, inject, OnInit } from '@angular/core';
import { HeroTypeTwo } from 'src/app/core/models/hero-type-two';
import { HeroBannerTypeTwoComponent } from 'src/app/shared/components/hero-banner-type-two/hero-banner-type-two.component';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/core/services/event.service';
import { Event } from 'src/app/core/models/events';
import { AsyncPipe } from '@angular/common';
import { EventItemComponent } from './components/event-item/event-item.component';
import { Router } from '@angular/router';
import { EventMenuItemsComponent } from './components/event-menu-items/event-menu-items.component';

@Component({
  selector: 'app-feature-event',
  templateUrl: './feature-event-container.component.html',
  styleUrl: './feature-event-container.component.scss',
  imports: [
    HeroBannerTypeTwoComponent, 
    AsyncPipe, 
    EventItemComponent,
    EventMenuItemsComponent
  ]
})

export class FeatureEventContainerComponent implements OnInit {
  
  private eventService = inject(EventService); 
  private router = inject(Router);
  
  eventList$!: Observable<Event[]>;
  eventMenuList$ = this.eventService.getEventMenus();

  protected readonly heroData: HeroTypeTwo = {
    image: '/img/events/secondary-hero-houses.jpeg',
    title: 'ÉVÉNEMENTS',
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
