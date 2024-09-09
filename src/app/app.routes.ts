import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: 'cursos',
    loadChildren: () => import('./components/cursos/cursos.routes').then(c => c.CURSO_ROUTE),
  },
  {
    path: 'property',
    loadChildren: () => import('./components/property-binding-interpolacao/property.routes').then(p => p.PROPERTY_ROUTE),
  }
];
