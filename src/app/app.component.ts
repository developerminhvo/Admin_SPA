import { Component } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent {
  constructor(
    protected readonly iconLibraries: NbIconLibraries
  ) {
    this.iconLibraries.setDefaultPack('eva');
    this.iconLibraries.registerFontPack('font-awesome', { iconClassPrefix: 'fa', packClass: 'fa' });
    // this.iconLibraries.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
    this.iconLibraries.registerFontPack('ion', { iconClassPrefix: 'ion' });
  }
}
