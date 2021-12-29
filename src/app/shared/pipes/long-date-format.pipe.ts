import { Pipe, PipeTransform } from '@angular/core';
import { DatesService } from '../services/dates.service';
import dayjs from 'dayjs';

@Pipe({
  name: 'longDateFormat'
})
export class LongDateFormatPipe implements PipeTransform {

  constructor(private dateService: DatesService) {
  }

  transform(value: any, ...args: any[]): unknown {
    return this.dateService.longFormat(dayjs(value));
  }

}
