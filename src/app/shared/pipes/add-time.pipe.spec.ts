import { AddTimePipe } from './add-time.pipe';
import dayjs from 'dayjs';

describe('AddTimePipe', () => {
  let pipe: AddTimePipe;

  beforeEach(() => pipe = new AddTimePipe());

  describe('#transform', () => {
    it('should throw when provided no arguments', () => {
      expect(() => (pipe.transform as any)(128)).toThrowError();
    });

    it('should add two hours', () => {
      const result = pipe.transform(dayjs('2018-01-20 10:00:00'), '2', 'hours');
      expect(dayjs(result).format('YYYY-MM-DD HH:mm:ss')).toBe('2018-01-20 12:00:00');
    });

    it('should add two days', () => {
      const result = pipe.transform(dayjs('2018-01-20 15:00:00'), '2', 'days');
      expect(dayjs(result).format('YYYY-MM-DD HH:mm:ss')).toBe('2018-01-22 15:00:00');
    });

    it('should add two years', () => {
      const result = pipe.transform(dayjs('2018-01-20 15:00:00'), 2, 'years');
      expect(dayjs(result).format('YYYY-MM-DD HH:mm:ss')).toBe('2020-01-20 15:00:00');
    });
  });
});
