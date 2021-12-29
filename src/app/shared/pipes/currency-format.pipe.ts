import { AsyncPipe } from '@angular/common';
import { ChangeDetectorRef, Injector, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LanguageService } from '../services/language.service';

@Pipe({
  name: 'currencyFormat',
  pure: false
})
export class CurrencyFormatPipe implements PipeTransform, OnDestroy {
  private asyncPipe: AsyncPipe;

  constructor(
    private languageService: LanguageService,
    private injector: Injector ) {
    this.asyncPipe = new AsyncPipe(injector.get(ChangeDetectorRef));
  }

  ngOnDestroy(): void {
    this.asyncPipe.ngOnDestroy();
  }

  transform(value: number | string): string | null {
    return this.asyncPipe.transform(this.getCurrency(value));
  }

  private getCurrency(value: number | string): Observable<string> {
    return of(new Intl.NumberFormat(this.languageService.getLocale(), {
      style: 'currency',
      currency: this.languageService.getCurrency(),
      minimumFractionDigits: 2
    }).format(Number(value)));
  }
}
