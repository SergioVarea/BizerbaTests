import {Pipe, PipeTransform} from '@angular/core';
import dayjs from 'dayjs';

@Pipe({ name: 'addTime' })
export class AddTimePipe implements PipeTransform {
  transform(value: any, amount: any, unit?: any): any {
      if (typeof amount === 'undefined' || (typeof amount === 'number' && typeof unit === 'undefined')) {
          throw new Error('AddTimePipe: missing required arguments');
      }
      return dayjs(value).add(amount, unit);
  }
}
