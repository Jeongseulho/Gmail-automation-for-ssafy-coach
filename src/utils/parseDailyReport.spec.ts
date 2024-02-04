import { parseDailyReport } from './parseDailyReport';

describe('일일 보고서 파일 이름 파싱', () => {
  it('파일 이름에서 날짜, 캠퍼스, 반, 이름을 파싱한다', () => {
    const fileName = '10기_240202_일일 프로젝트 진행_공통_구미_1반_이희진_오프라인';
    const parsed = parseDailyReport(fileName);
    expect(parsed).toEqual({
      date: '240202',
      campus: '구미',
      classSection: '1반',
      name: '이희진',
    });
  });
});
