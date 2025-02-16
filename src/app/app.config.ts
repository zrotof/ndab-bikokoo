import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom(FontAwesomeModule),
    provideAnimationsAsync(),
    provideClientHydration(),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: Aura,
      },
    }),
  ],
};
