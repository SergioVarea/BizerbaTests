import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
@Component({
  selector: 'biz-home-view',
  templateUrl: './home-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BizHomeViewComponent {

  @HostBinding('class') className = 'biz-view biz-home-view';

}
