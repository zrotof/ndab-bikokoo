import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "a-propos",
        loadComponent: () => import('./features/feature-about/feature-about.component').then(m => m.FeatureAboutComponent)
    },
    {
        path: "",
        loadComponent: () => import('./features/feature-home/feature-home.component').then(m => m.FeatureHomeComponent)
    },   
];
