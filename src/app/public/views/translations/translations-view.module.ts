import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Component
import { BizTranslationsViewComponent } from './translations-view.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [
    BizTranslationsViewComponent,
  ],
  exports: [
    BizTranslationsViewComponent,
  ],
})
export class BizTranslationsViewModule {}
