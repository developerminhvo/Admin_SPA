import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'core', pathMatch: 'full' },
  { path: 'core', loadChildren: () => import('./modules/core/core.module').then((m) => m.CoreModule) }
];

export const AppRoutes = RouterModule.forRoot(routes, { useHash: true });
