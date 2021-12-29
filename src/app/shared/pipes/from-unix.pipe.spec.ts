import { FromUnixPipe } from './from-unix.pipe';
import dayjs from 'dayjs';

describe('FromUnixPipe', () => {

  let pipe: FromUnixPipe;

  beforeEach(() => pipe = new FromUnixPipe());

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('#transform', () => {
    it('should parse a unix timestamp number to dayjs', () => {
      const result = pipe.transform(1456263980);
      expect(result).toEqual(dayjs(1456263980).unix());
    });

    it('should parse a unix timestamp string to dayjs', () => {
      const result = pipe.transform('1456263980');
      expect(result).toEqual(dayjs(1456263980).unix());
    });
  });
});
