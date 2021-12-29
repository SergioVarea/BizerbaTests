import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

// RxJS
import { map, startWith } from 'rxjs';

// Shared
import { LANGUAGES } from 'src/app/shared/constants';

@Component({
  selector: 'biz-public-header-component',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BizPublicHeaderComponent implements OnInit {
  @HostBinding('class') className = 'biz-component biz-public-header-component';

  formGroup: FormGroup;

  languages = Array.from(LANGUAGES).map(([locale, value]) => ({locale, languageCombo: value.languageCombo}));

  constructor(private translateService: TranslateService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      selectedLanguage: this.translateService.defaultLang,
    });

    this.formGroup.valueChanges
      .pipe(
        map(({ selectedLanguage }) => selectedLanguage),
        startWith(this.translateService.defaultLang)
      )
      .subscribe((_: string) => this.translateService.use(_));
  }

}
