import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

// Components
import { BizCurrenciesViewComponent } from './currencies-view.component';

@NgModule({
  imports: [
    BrowserModule,
    PipesModule,
    TranslateModule,
  ],
  providers: [],
  declarations: [
    BizCurrenciesViewComponent,
  ],
  exports: [
    BizCurrenciesViewComponent,
  ],
})
export class BizCurrenciesViewModule {}
