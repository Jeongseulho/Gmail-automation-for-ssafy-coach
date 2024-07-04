import { formatDate } from './formatDate';

describe('formatDate 함수', () => {
  it("날짜를 앞부분의 0을 포함한 '월 일(요일)' 형식으로 변환한다", () => {
    const formatted = formatDate('240202');
    expect(formatted).toBe('02월 02일(금)');
  });

  it("날짜를 '월 일(요일)' 형식으로 변환한다", () => {
    const formatted = formatDate('231212');
    expect(formatted).toBe('12월 12일(화)');
  });
});
