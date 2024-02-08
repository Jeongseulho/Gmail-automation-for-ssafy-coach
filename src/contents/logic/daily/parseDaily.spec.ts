import { parseDaily } from './parseDaily';

describe('parseDaily 함수', () => {
  it('일일 보고서 파일 이름에서 날짜, 캠퍼스, 반, 이름을 파싱한다', () => {
    const fileName = '10기_240202_일일 프로젝트 진행_공통_구미_1반_이희진_오프라인.docx';
    const parsed = parseDaily(fileName);
    expect(parsed).toEqual({
      date: '240202',
      campus: '구미',
      classGroup: '1반',
      name: '이희진',
    });
  });

  it('일일 취합 보고서 파일 이름에서 날짜, 캠퍼스, 이름을 파싱한다', () => {
    const fileName = '10기_240202_일일 프로젝트 진행_공통_구미_취합_서은진.docx';
    const parsed = parseDaily(fileName, true);
    expect(parsed).toEqual({
      date: '240202',
      campus: '구미',
      name: '서은진',
    });
  });
});
