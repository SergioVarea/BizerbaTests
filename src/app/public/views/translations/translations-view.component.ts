import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'biz-translations-view',
  templateUrl: './translations-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class BizTranslationsViewComponent {

  @HostBinding('class') className = 'biz-view biz-translations-view';

}
