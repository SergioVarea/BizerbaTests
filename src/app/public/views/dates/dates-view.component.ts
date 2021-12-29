import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import dayjs, { Dayjs } from 'dayjs';
import { DatesService } from 'src/app/shared/services/dates.service';


@Component({
  selector: 'biz-dates-view',
  templateUrl: './dates-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BizDatesViewComponent implements OnInit {

  @HostBinding('class') className = 'biz-view biz-dates-view';

  formGroup: FormGroup;
  date = dayjs();
  datePlusOne = dayjs().add(1, 'day');
  datePlusTen = dayjs().add(10, 'day');

  constructor(
    private dateService: DatesService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      increaseDay: 3,
    });
  }

  get increaseDate(): Dayjs {
    return this.dateService.increaseDate(dayjs(this.today), this.formGroup.controls.increaseDay.value);
  }

  get today(): Dayjs {
    return this.dateService.today;
  }

  get weekdays(): string [] {
    return this.dateService.weekdays;
  }

  get timeZone(): Dayjs {
    return this.dateService.getTimeZone(this.date, this.userTimezone);
  }

  get userTimezone(): string {
    return this.dateService.userTimezone;
  }

  get isBefore(): boolean {
    return this.dateService.isBefore(this.date, this.datePlusTen);
  }

  get isSame(): boolean {
    return this.dateService.isSame(this.date, this.datePlusTen);
  }

  get isAfter(): boolean {
    return this.dateService.isAfter(this.date, this.datePlusTen);
  }

  get isSameOrBefore(): boolean {
    return this.dateService.isSameOrBefore(this.date, this.datePlusTen);
  }

  get isSameOrAfter(): boolean {
    return this.dateService.isSameOrAfter(this.date, this.datePlusTen);
  }

  get isBetween(): boolean {
    return this.dateService.isBetween(this.datePlusOne, this.date, this.datePlusTen);
  }
}
