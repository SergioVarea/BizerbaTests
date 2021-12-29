import { Pipe, PipeTransform } from '@angular/core';
import dayjs from 'dayjs';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {
    return value ? dayjs(value).format(args[0]) : '';
  }

}
