import { Injectable, OnDestroy } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { LANGUAGES } from '../constants';
import { LanguageChangeHandler, LanguageProps } from '../definitions';
import { destroySubscriptions } from '../utils';
import { BidiService } from './bidi.service';
import { DatesService } from './dates.service';

@Injectable({
    providedIn: 'root'
})
export class LanguageService implements OnDestroy{
    private subscriptions: Array<Subscription> = [];
    private languageChangeHandlerServices: Array<LanguageChangeHandler>;

    private _LANGUAGE: LanguageProps | undefined;

    constructor(private translateService: TranslateService,
                bidiService: BidiService,
                datesService: DatesService) {
        this.languageChangeHandlerServices = [bidiService, datesService];
        this.createSubscriptions();
    }

    ngOnDestroy(): void {
        destroySubscriptions(this.subscriptions);
    }

    private createSubscriptions(): void {
        this.subscriptions.push(
            this.translateService
                .onLangChange
                .subscribe((event: LangChangeEvent) => {
                  this.languageChangeHandlerServices.forEach(s => s.languageChangeHandler(event));
                  this.language = LANGUAGES.get(event.lang);
                })
        );
    }

    getCurrency(): string {
      return this._LANGUAGE?.currency || 'USD';
    }

    getLocale(): string {
      return this.translateService.currentLang;
    }

    set language(lang: LanguageProps | undefined) {
      this._LANGUAGE = lang;
    }
}
