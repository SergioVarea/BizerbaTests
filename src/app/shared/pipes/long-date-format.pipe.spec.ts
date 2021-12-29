import { TestBed } from '@angular/core/testing';
import { DatesService } from '../services/dates.service';
import { LongDateFormatPipe } from './long-date-format.pipe';

xdescribe('LongDateFormatPipe', () => {
  let service: DatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatesService);
  });

  it('create an instance', () => {
    const pipe = new LongDateFormatPipe(service);
    expect(pipe).toBeTruthy();
  });
});
