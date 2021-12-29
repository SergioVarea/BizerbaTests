import { AsyncPipe } from '@angular/common';
import { ChangeDetectorRef, Injector, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LanguageService } from '../services/language.service';

@Pipe({
  name: 'numberFormat',
  pure: false
})
export class NumberFormatPipe implements PipeTransform, OnDestroy {
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
    return this.asyncPipe.transform(this.getFormat(value));
  }

  private getFormat(value: number | string): Observable<string> {
    return of(new Intl.NumberFormat(this.languageService.getLocale(), {
      minimumFractionDigits: 2
    }).format(Number(value)));
  }
}
