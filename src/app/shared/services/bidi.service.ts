// Angular
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { DefaultLangChangeEvent, LangChangeEvent, TranslateService } from '@ngx-translate/core';

// RxJS
import { filter } from 'rxjs';

import { LANGUAGES } from '../constants';
import { LanguageChangeHandler } from '../definitions';

@Injectable({
  providedIn: 'root',
})
export class BidiService implements LanguageChangeHandler {
  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  languageChangeHandler(event: LangChangeEvent): void {
    const htmlTag = this.document.getElementsByTagName('html')[0];
    htmlTag.setAttribute('lang', event.lang);
    htmlTag.setAttribute('dir', LANGUAGES.get(event.lang)?.rtl ? 'rtl' : 'ltr');
  }
}
