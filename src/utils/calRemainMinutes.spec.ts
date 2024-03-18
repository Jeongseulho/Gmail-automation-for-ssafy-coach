import { calRemainMinutes } from './calRemainMinutes';

describe('calRemainMinutes 함수', () => {
  it('현재 시간이 목표 시간보다 늦을 때', () => {
    const now = new Date('2021-01-01T18:01:00');
    const targetTime = new Date('2021-01-01T18:00:00');
    expect(calRemainMinutes(now, targetTime)).toBe(1439);
  });

  it('현재 시간이 목표 시간보다 이른 때', () => {
    const now = new Date('2021-01-01T17:59:00');
    const targetTime = new Date('2021-01-01T18:00:00');
    expect(calRemainMinutes(now, targetTime)).toBe(1);
  });
});
