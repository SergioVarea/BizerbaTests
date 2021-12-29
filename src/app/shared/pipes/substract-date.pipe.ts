import { Pipe, PipeTransform } from '@angular/core';
import dayjs from 'dayjs';

@Pipe({
  name: 'substractDate'
})
export class SubstractDatePipe implements PipeTransform {

  transform(value: any, amount: any, unit?: any): any {
    if (typeof amount === 'undefined' || (typeof amount === 'number' && typeof unit === 'undefined')) {
        throw new Error('SubstractDatePipe: missing required arguments');
    }
    return dayjs(value).subtract(amount, unit);
  }

}
