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
import { PlannerService } from 'src/app/core/services/planner.service';

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
  
  private plannerService = inject(PlannerService); 
  private router = inject(Router);
  
  protected plannerMenuList : any; 
  protected plannerList$!: Observable<any>;

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
    this.getPlannerMenuTypes();
  }

  getPlannerMenuTypes(): void {
    this.plannerService.getPlannerMenus().subscribe({
      next: (res : any) => {
        this.plannerMenuList = res;

        this.onPlannerMenuItemHandler(0);
      }
    })
  }

  onPlannerMenuItemHandler(event : any){
    const index = event;
    if(this.plannerMenuList[index].isActive === false){
      this.plannerMenuList.forEach((plannerMenu : any) => plannerMenu.isActive = false)
      this.plannerMenuList[index].isActive = true;

      const params = `type=${this.plannerMenuList[index].type}`;
      this.plannerList$ = this.plannerService.getPlanners(params);
    }
  }

  onEventClickHandler(id: number): void {
    this.router.navigate(['/evenements', id]);
  }
  
}
