import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'biz-currencies-view',
  templateUrl: './currencies-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BizCurrenciesViewComponent {

  @HostBinding('class') className = 'biz-view biz-currencies-view';

  number = 12344567.235898;

  constructor() {}
}
