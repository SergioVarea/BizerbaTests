import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

// Components
import { BizHomeViewComponent } from './home-view.component';

@NgModule({
  imports: [
    BrowserModule,
    TranslateModule
  ],
  providers: [],
  declarations: [
    BizHomeViewComponent,
  ],
  exports: [
    BizHomeViewComponent,
  ],
})
export class BizHomeViewModule {}
