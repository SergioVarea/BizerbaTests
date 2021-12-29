import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'biz-logo-component',
  templateUrl: './logo.component.html',
})
export class BizLogoComponent {

  @HostBinding('class') className = 'biz-component biz-logo-component';

}
