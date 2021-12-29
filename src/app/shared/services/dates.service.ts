import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import dayjs, { Dayjs } from 'dayjs';
import duration, { DurationUnitType } from 'dayjs/plugin/duration';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import localeData from 'dayjs/plugin/localeData';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
// Plugins
import utc from 'dayjs/plugin/utc';
import { LanguageChangeHandler } from '../definitions';

declare var require: any;

// Load plugins
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.extend(localizedFormat);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(isBetween);
dayjs.extend(localeData);

@Injectable({
  providedIn: 'root'
})
export class DatesService implements LanguageChangeHandler {
  constructor(private translateService: TranslateService) {
  }

  languageChangeHandler(event: LangChangeEvent): void {
    const locale = event.lang || this.translateService.defaultLang;
    require(`dayjs/locale/${locale}`);
    dayjs.locale(locale);
  }

  increaseDate(date: Dayjs, value: number): Dayjs {
    return date.add(value, 'day');
  }

  humanize(time: number, type: DurationUnitType): string {
    return dayjs.duration(time, type).humanize(true);
  }

  format(date: Dayjs, format: string): string {
    return dayjs(date).format(format);
  }

  longFormat(date: Dayjs): string {
    return date.format('LLLL');
  }

  shortFormat(date: Dayjs): string {
    return date.format('L');
  }

  longTimeFormat(date: Dayjs): string {
    return date.format('L LT');
  }

  isBefore(date: Dayjs, secondDate: Dayjs): boolean {
    return date.isBefore(secondDate);
  }

  isSame = (date: Dayjs, secondDate: Dayjs): boolean => date.isSame(secondDate);

  isAfter(date: Dayjs, secondDate: Dayjs): boolean {
    return date.isAfter(secondDate);
  }

  isSameOrBefore(date: Dayjs, secondDate: Dayjs): boolean {
    return date.isSameOrBefore(secondDate);
  }

  isSameOrAfter(date: Dayjs, secondDate: Dayjs): boolean {
    return date.isSameOrAfter(secondDate);
  }

  isBetween(date: Dayjs, firstDate: Dayjs, secondDate: Dayjs): boolean {
    return date.isBetween(firstDate, secondDate);
  }

  getTimeZone(date: Dayjs, timeZone: string): Dayjs {
    return dayjs.tz(date, timeZone);
  }

  get userTimezone(): string {
    return dayjs.tz.guess();
  }

  get today(): Dayjs {
    return dayjs();
  }

  get weekdays(): string[] {
    return dayjs.weekdays();
  }
}
