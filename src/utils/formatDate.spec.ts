import { formatDate } from './formatDate';

describe('formatDate 함수', () => {
  it("날짜를 '월 일(요일)' 형식으로 변환한다", () => {
    const formatted = formatDate('240202');
    expect(formatted).toBe('2월 2일(금)');
  });
});
