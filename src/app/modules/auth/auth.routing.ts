import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages';

const routes: Routes = [
  { path: '', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
];

export const AuthRoutes = RouterModule.forChild(routes);
