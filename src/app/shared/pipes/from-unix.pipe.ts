import { Pipe, PipeTransform } from '@angular/core';
import dayjs from 'dayjs';

@Pipe({
  name: 'fromUnix'
})
export class FromUnixPipe implements PipeTransform {

  transform(value: any, ...args: string[]): any {
    if (typeof value === 'string') {
      value = +value;
    }
    return dayjs(value).unix();
  }

}
