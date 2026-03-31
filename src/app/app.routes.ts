import { Routes } from '@angular/router';
import { HomeComponent } from './Features/home/home.component';
import { AboutComponent } from './Features/about/about.component';

export const routes: Routes = [
  { path: 'home', loadComponent: () =>
      import('./Features/home/home.component').then(m => m.HomeComponent)
 },
  { path: 'about',
    loadComponent: () =>
      import('./Features/about/about.component').then(m => m.AboutComponent)
    },
     {
    path: 'directives',
    loadChildren: () =>
      import('./Features/directives/directives.routes').then(m => m.directivesRoutes)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
