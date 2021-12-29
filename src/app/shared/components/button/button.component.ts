import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'biz-button-component',
  templateUrl: './button.component.html',
})
export class BizButtonComponent {

  @HostBinding('class') className = 'biz-component biz-button-component';

}
