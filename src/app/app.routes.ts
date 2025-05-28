import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "a-propos",
    data: {
      isBackgroundReduced: true
    },
    loadComponent: () => import('./features/feature-about/feature-about.component').then(m => m.FeatureAboutComponent)
  },
  {
    path: "contactez-nous",
    data: {
      isBackgroundReduced: true
    },
    loadComponent: () => import('./features/feature-contact/feature-contact.component').then(m => m.FeatureContactComponent)
  },
  {
    path: "nos-danses",
    data: {
      isBackgroundReduced: true
    },
    loadComponent: () => import('./features/feature-dances/feature-dances.component').then(m => m.FeatureDancesComponent)
  },
  {
    path: 'evenements',
    data: {
      isBackgroundReduced: true
    },
    loadComponent: () =>
      import(
        './features/feature-event/pages/feature-event-container/feature-event-container.component'
      ).then((m) => m.FeatureEventContainerComponent),
  },
  {
    path: 'evenements/:id',
    data: {
      isBackgroundReduced: true
    },
    loadComponent: () =>
      import(
        './features/feature-event/pages/feature-event-details-container/feature-event-details-container.component'
      ).then((m) => m.FeatureEventDetailsContainerComponent),
  },
  {
    path: "gouvernance",
    loadComponent: () => import('./features/feature-gouvernance/organizational/organizational.component').then(m => m.OrganizationalComponent)
  },
  {
    path: "sengager",
    loadComponent: () => import('./features/feature-engage/feature-engage.component').then(m => m.FeatureEngageComponent)
  },
  {
    path: "",
    loadComponent: () => import('./features/feature-home/feature-home.component').then(m => m.FeatureHomeComponent)
  }
];