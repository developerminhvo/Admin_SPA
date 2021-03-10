import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'core', pathMatch: 'full' },
  { path: 'core', loadChildren: () => import('src/app/modules').then((m) => m.CoreModule) },
  { path: 'auth', loadChildren: () => import('src/app/modules').then((m) => m.AuthModule) },
];

export const AppRoutes = RouterModule.forRoot(routes, { useHash: true });
