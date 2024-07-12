import { parseJira } from './parseJira';

describe('parseJira 함수', () => {
  it('주간 Jira 보고서 파일 이름에서 날짜, 캠퍼스, 반, 주차, 이름을 파싱한다', () => {
    const fileName = '10기_240126_주간Jira현황_공통_구미_1반_3주차_이희진_정슬호.xlsx';
    const parsed = parseJira(fileName);
    expect(parsed).toEqual({
      cohort: '10기',
      date: '240126',
      project: '공통',
      campus: '구미',
      classGroup: '1반',
      week: '3주차',
      name1: '이희진',
      name2: '정슬호',
    });
  });
});
