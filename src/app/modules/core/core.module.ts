import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreRoutes } from './core.routing';
import { LayoutComponent } from './pages';
const PAGES = [
  LayoutComponent
];

@NgModule({
  imports: [
    SharedModule.forChild(),
    CoreRoutes
  ],
  declarations: [
    ...PAGES
  ]
})
export class CoreModule { }
