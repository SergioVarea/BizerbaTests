import { TestBed } from '@angular/core/testing';
import { DatesService } from '../services/dates.service';
import { LongDateTimeFormatPipe } from './long-date-time-format.pipe';

xdescribe('LongDateTimeFormatPipe', () => {
  let service: DatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatesService);
  });

  it('create an instance', () => {
    const pipe = new LongDateTimeFormatPipe(service);
    expect(pipe).toBeTruthy();
  });
});
