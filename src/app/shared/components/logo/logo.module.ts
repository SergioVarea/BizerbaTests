import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// Components
import {BizLogoComponent } from './logo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, RouterModule],
  providers: [],
  declarations: [BizLogoComponent],
  exports: [BizLogoComponent],
})
export class BizLogoModule {}
