import { Pipe, PipeTransform } from '@angular/core';
import dayjs from 'dayjs';

@Pipe({
  name: 'parseDate'
})
export class ParseDatePipe implements PipeTransform {

  transform(value: string, format: string): any {
    return dayjs(value).format(format);
  }

}
