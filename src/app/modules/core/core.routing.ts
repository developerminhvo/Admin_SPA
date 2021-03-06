import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './pages';

const routes: Routes = [
  {
    path: '', component: LayoutComponent
  },
];

export const CoreRoutes = RouterModule.forChild(routes);
