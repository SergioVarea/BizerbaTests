import { Pipe, PipeTransform } from '@angular/core';
import dayjs from 'dayjs';
import { DatesService } from '../services/dates.service';

@Pipe({
  name: 'differenceDate'
})
export class DifferenceDatePipe implements PipeTransform {

  constructor(private dateService: DatesService) {
  }

  transform(value: any, otherValue: any,  unit?: any, precision?: boolean): string {
    const date = dayjs(value);
    const date2 = (otherValue !== null) ? dayjs(otherValue) : dayjs();
    const diff = date.diff(date2, unit, precision);

    return this.dateService.humanize(diff, unit);
  }

}
