import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'biz-public-navbar-component',
  templateUrl: './navbar.component.html',
})
export class BizPublicNavbarComponent {

  @HostBinding('class') className = 'biz-component biz-public-navbar-component';


}
