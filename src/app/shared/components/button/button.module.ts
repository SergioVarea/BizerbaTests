import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// Components
import { BizButtonComponent } from './button.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [BizButtonComponent],
  exports: [BizButtonComponent],
})
export class BizButtonModule {}
