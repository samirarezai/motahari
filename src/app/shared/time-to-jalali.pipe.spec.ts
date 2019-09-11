import { TimeToJalaliPipe } from './time-to-jalali-pipe/time-to-date-converter.pipe';

describe('TimeToJalaliPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeToJalaliPipe();
    expect(pipe).toBeTruthy();
  });
});
