import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

import Lara from '@primeng/themes/lara';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom(FontAwesomeModule),
    provideAnimationsAsync(),
    provideClientHydration(),
    providePrimeNG({
      theme: {
        preset: Lara,
        options: { 
          theme: 'lara-light-blue',
          darkModeSelector: false
        }
      }
    })
  ]
};
