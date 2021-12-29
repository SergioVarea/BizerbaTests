import { NgModule } from '@angular/core';

import { SubstractDatePipe } from './substract-date.pipe';
import { AddTimePipe } from './add-time.pipe';
import { DateFormatPipe } from './date-format.pipe';
import { DifferenceDatePipe } from './difference-date.pipe';
import { FromUnixPipe } from './from-unix.pipe';
import { ParseDatePipe } from './parse-date.pipe';
import { LongDateFormatPipe } from './long-date-format.pipe';
import { LongDateTimeFormatPipe } from './long-date-time-format.pipe';
import { ShortDateFormatPipe } from './short-date-format.pipe';
import { NumberFormatPipe } from './number-format.pipe';
import { CurrencyFormatPipe } from './currency-format.pipe';

const ANGULAR_DAYJS_PIPES = [
  AddTimePipe,
  DateFormatPipe,
  DifferenceDatePipe,
  SubstractDatePipe,
  ParseDatePipe,
  FromUnixPipe,
  LongDateFormatPipe,
  LongDateTimeFormatPipe,
  ShortDateFormatPipe,
  NumberFormatPipe,
  CurrencyFormatPipe
];

@NgModule({
  declarations: ANGULAR_DAYJS_PIPES,
  exports: ANGULAR_DAYJS_PIPES
})
export class PipesModule { }
