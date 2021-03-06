import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'core', loadChildren: () => import('./modules/core/core.module').then((m) => m.CoreModule) },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule) },
];

export const AppRoutes = RouterModule.forRoot(routes, { useHash: true });
