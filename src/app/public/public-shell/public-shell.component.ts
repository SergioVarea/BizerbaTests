import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Shared
import { ROUTE_SLIDE_TOP_STATE_TRIGGER } from '../../shared/animations/route-animations';


@Component({
  selector: 'biz-public-shell',
  templateUrl: './public-shell.component.html',
  animations: [ROUTE_SLIDE_TOP_STATE_TRIGGER],
})
export class BizPublicShellComponent {

  goToView(outlet: RouterOutlet) {
    if (outlet.isActivated) {
      const menuItem = outlet.activatedRouteData['menuItem'];
      if (!menuItem) return 'secondary';
      return menuItem;
    }
  }

}



