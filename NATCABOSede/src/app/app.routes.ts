import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'kpis-dashboard',
    loadComponent: () => import('./features/kpis-dashboard/kpis-dashboard.component').then(m => m.KpisDashboardComponent)
  },
  // Agrega más rutas según sea necesario
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
