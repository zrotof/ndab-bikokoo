import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: "actualites",
    data: {
      isHeaderDisplayed: true
    },
    children: [
      {
        path: "",
        loadComponent: () => import('./features/feature-blog/feature-blog.component').then(m => m.FeatureBlogComponent)
      },
      {
        path: ":id",
        loadComponent: () => import('./features/feature-blog-item/feature-blog-item.component').then(m => m.FeatureBlogItemComponent)
      }
    ]
  },
  {
    path: "a-propos",
    data: {
      isHeaderDisplayed: true
    },
    loadComponent: () => import('./features/feature-about/feature-about.component').then(m => m.FeatureAboutComponent)
  },
  {
    path: "contactez-nous",
    data: {
      isHeaderDisplayed: true
    },
    loadComponent: () => import('./features/feature-contact/feature-contact.component').then(m => m.FeatureContactComponent)
  },
  {
    path: "culture-et-tradition",
    data: {
      isHeaderDisplayed: true
    },
    loadComponent: () => import('./features/feature-culture-tradition/feature-culture-tradition.component').then(m => m.FeatureCultureTraditionComponent)
  },
  {
    path: "fonctionnement",
    data: {
      isHeaderDisplayed: true
    },
    loadComponent: () => import('./features/feature-fonctionnement/feature-fonctionnement.component').then(m => m.FeatureFonctionnementComponent)
  },
  {
    path: "nos-danses",
    data: {
      isHeaderDisplayed: true
    },
    loadComponent: () => import('./features/feature-dances/feature-dances.component').then(m => m.FeatureDancesComponent)
  },
  {
    path: 'evenements',
    data: {
      isHeaderDisplayed: true
    },
    loadComponent: () =>
      import(
        './features/feature-event/pages/feature-event-container/feature-event-container.component'
      ).then((m) => m.FeatureEventContainerComponent),
  },
  {
    path: 'evenements/:id',
    data: {
      isHeaderDisplayed: true
    },
    loadComponent: () =>
      import(
        './features/feature-event/pages/feature-event-details-container/feature-event-details-container.component'
      ).then((m) => m.FeatureEventDetailsContainerComponent),
  },
  {
    path: "gouvernance",
    data: {
      isHeaderDisplayed: true
    },
    loadComponent: () => import('./features/feature-gouvernance/organizational/organizational.component').then(m => m.OrganizationalComponent)
  },
  {
    path: "notre-offre",
    data: {
      isHeaderDisplayed: true
    },
    loadComponent: () => import('./features/feature-our-offer/feature-our-offer.component').then(m => m.FeatureOurOfferComponent),
  },
  {
    path: "notre-gastronomie",
    data: {
      isHeaderDisplayed: true
    },
    loadComponent: () => import('./features/feature-food/feature-food.component').then(m => m.FeatureFoodComponent),
    children: [
      {
        path: ":name",
        loadComponent: () => import('./features/feature-food/components/food-item/food-item.component').then(m => m.FoodItemComponent)
      }
    ]
  },
  {
    path: "se-connecter",
    data: {
      isHeaderDisplayed: false
    },
    loadComponent: () => import('./features/feature-login/feature-login.component').then(m => m.FeatureLoginComponent)
  },
  {
    path: "sengager",
    data: {
      isHeaderDisplayed: true
    },
    loadComponent: () => import('./features/feature-engage/feature-engage.component').then(m => m.FeatureEngageComponent)
  },
  {
    path: "sinscrire",
    data: {
      isHeaderDisplayed: false
    },
    loadComponent: () => import('./features/feature-register/feature-register.component').then(m => m.FeatureRegisterComponent)
  },
  {
    path: "",
    data: {
      isHeaderDisplayed: true
    },
    loadComponent: () => import('./features/feature-home/feature-home.component').then(m => m.FeatureHomeComponent)
  }
];