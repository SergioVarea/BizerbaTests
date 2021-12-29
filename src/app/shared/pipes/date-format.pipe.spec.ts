import { DateFormatPipe } from './date-format.pipe';

describe('DateFormatPipe', () => {
  let pipe: DateFormatPipe;

  beforeEach(() => pipe = new DateFormatPipe());
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should properly format a date', () => {
    const result = pipe.transform('2016-01-24 01:23:45', 'MMMM D YYYY');
    expect(result).toBe('January 24 2016');
  });
});
