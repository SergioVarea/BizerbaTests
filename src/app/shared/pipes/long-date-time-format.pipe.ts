import { Pipe, PipeTransform } from '@angular/core';
import dayjs from 'dayjs';
import { DatesService } from '../services/dates.service';

@Pipe({
  name: 'longDateTimeFormat'
})
export class LongDateTimeFormatPipe implements PipeTransform {

  constructor(private dateService: DatesService) {
  }

  transform(value: any, ...args: any[]): unknown {
    return this.dateService.longTimeFormat(dayjs(value));
  }

}
