import { TestBed } from '@angular/core/testing';
import { DatesService } from '../services/dates.service';
import { ShortDateFormatPipe } from './short-date-format.pipe';

xdescribe('ShortDateFormatPipe', () => {
  let service: DatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatesService);
  });

  it('create an instance', () => {
    const pipe = new ShortDateFormatPipe(service);
    expect(pipe).toBeTruthy();
  });
});
