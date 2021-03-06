import { ParseDatePipe } from './parse-date.pipe';
import dayjs from 'dayjs';
import { DateFormatPipe } from './date-format.pipe';

describe('ParseDatePipe', () => {
  let pipe: ParseDatePipe;

  beforeEach(() => pipe = new ParseDatePipe() );

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('#transform', () => {

    it('should output a dayjs object for a string date', () => {
      const dateString = '2015#09#13';
      const formatInputString = 'YYYY#MM#DD';
      const parsedDayjs = dayjs(pipe.transform(dateString, formatInputString));
      expect(parsedDayjs.isValid()).toBe(true);

      expect(parsedDayjs.year()).toBe(2015);
      expect(parsedDayjs.month()).toBe(8);
      expect(parsedDayjs.date()).toBe(13);
    });

    it('should be pipeable to amDateFormat', () => {
      const amDateFormat = new DateFormatPipe();
      const datetimeString = '01/02/2016';
      const formatInputString = 'DD/MM/YYYY';
      const momentFormatString = 'YYYY-MM-DD';
      const parseOutput = pipe.transform(datetimeString, formatInputString);
      expect(amDateFormat.transform(parseOutput, momentFormatString)).toEqual('2016-02-01');
    });

  });
});
