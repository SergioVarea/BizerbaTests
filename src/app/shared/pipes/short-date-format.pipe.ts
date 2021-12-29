import { Pipe, PipeTransform } from '@angular/core';
import dayjs from 'dayjs';
import { DatesService } from '../services/dates.service';

@Pipe({
  name: 'shortDateFormat'
})
export class ShortDateFormatPipe implements PipeTransform {

  constructor(private dateService: DatesService) {
  }

  transform(value: any, ...args: any[]): unknown {
    return this.dateService.shortFormat(dayjs(value));
  }

}
