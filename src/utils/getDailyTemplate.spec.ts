import { getDailyTemplate } from './getDailyTemplate';

describe('getDailyTemplate 함수', () => {
  it('템플릿을 반환한다', () => {
    const template = getDailyTemplate('240202', '구미', '1반', '이희진');
    expect(template).toEqual({
      title: '[SSAFY] 2월 2일(금) 구미 1반 실습코치 이희진 일일 보고서 송부',
      content: `안녕하세요.
      <br>
      구미 실습코치 이희진입니다.
      <br>
      <br>
      2월 2일 일일 프로젝트 진행 보고서 첨부파일로 송부 드립니다.
      <br>
      <br>
      <b>특이사항</b>
      <br>
      해당 사항 없음.
      <br>
      <br>
      감사합니다.
      <br>
      이희진 드림.`,
    });
  });
});
