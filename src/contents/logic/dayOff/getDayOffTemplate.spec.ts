import { getDayOffTemplate } from './getDayOffTemplate';

describe('getDayOffTemplate 함수', () => {
  it('오전 반차 휴가 신청서 템플릿을 반환한다', () => {
    const { title, content } = getDayOffTemplate('10기', '240202', '구미', '이희진', '오전 반차');
    expect(title).toMatchSnapshot();
    expect(content).toMatchSnapshot();
  });
  it('오후 반차 휴가 신청서 템플릿을 반환한다', () => {
    const { title, content } = getDayOffTemplate('10기', '240202', '구미', '이희진', '오후 반차');
    expect(title).toMatchSnapshot();
    expect(content).toMatchSnapshot();
  });

  it('하루 휴가 신청서 템플릿을 반환한다', () => {
    const { title, content } = getDayOffTemplate('10기', '240202', '구미', '이희진', '하루 휴가');
    expect(title).toMatchSnapshot();
    expect(content).toMatchSnapshot();
  });
});
