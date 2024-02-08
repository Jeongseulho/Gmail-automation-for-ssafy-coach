import { parseDayOff } from './parseDayOff';

describe('parseDayOff 함수', () => {
  it('휴가 신청서에서 날짜, 캠퍼스, 이름을 파싱한다.', () => {
    const fileName = '240201_휴가신청서_구미_이희진.docx';
    const parsed = parseDayOff(fileName);
    expect(parsed).toEqual({
      date: '240201',
      campus: '구미',
      name: '이희진',
    });
  });
});
