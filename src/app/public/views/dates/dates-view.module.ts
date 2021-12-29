import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { TranslateModule } from '@ngx-translate/core';

import {  PipesModule } from 'src/app/shared/pipes/pipes.module';
import { BizDatesViewComponent } from './dates-view.component';

// Dates

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    PipesModule,
    ReactiveFormsModule,
    TranslateModule.forChild()],
  providers: [],
  declarations: [
    BizDatesViewComponent,
  ],
  exports: [
    BizDatesViewComponent,
  ],
})
export class BizDatesViewModule {}
