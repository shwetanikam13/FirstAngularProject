import { Routes } from '@angular/router';

export const directivesRoutes: Routes = [
  {
    path: 'structural',
    loadComponent: () =>
      import('./structural/structural.component')
        .then(m => m.StructuralComponent)
  },
  
  {
    path: 'component',
    loadComponent: () =>
      import('./componant/componant.component')
        .then(m => m.ComponantComponent)
  },
  {
    path: 'attribute',
    loadComponent: () =>
      import('./attribute/attribute.component')
        .then(m => m.AttributeComponent)
  },
  
];
