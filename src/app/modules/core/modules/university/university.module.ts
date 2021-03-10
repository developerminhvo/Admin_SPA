import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversityRoutes } from './university.routing';
import { UniversityDetailComponent, UniversityMainComponent } from './pages';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateMajorModalComponent, CreateUniversityModalComponent } from './components/modals';

const COMPONENTS = [
  CreateUniversityModalComponent,
  CreateMajorModalComponent
];

const PAGES = [
  UniversityMainComponent,
  UniversityDetailComponent
]
@NgModule({
  imports: [
    SharedModule.forChild(),
    UniversityRoutes
  ],
  declarations: [...PAGES, ...COMPONENTS]
})
export class UniversityModule { }
