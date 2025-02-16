import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'a-propos',
    loadComponent: () =>
      import('./features/feature-about/feature-about.component').then(
        (m) => m.FeatureAboutComponent
      ),
  },
  {
    path: 'evenements',
    loadComponent: () =>
      import(
        './features/feature-event/pages/feature-event-container/feature-event-container.component'
      ).then((m) => m.FeatureEventContainerComponent),
  },
  {
    path: 'evenements/:id',
    loadComponent: () =>
      import(
        './features/feature-event/pages/feature-event-details-container/feature-event-details-container.component'
      ).then((m) => m.FeatureEventDetailsContainerComponent),
  },
  {
    path: '',
    loadComponent: () =>
      import('./features/feature-home/feature-home.component').then(
        (m) => m.FeatureHomeComponent
      ),
  },
];
