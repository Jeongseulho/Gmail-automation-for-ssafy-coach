import { getDailyGatherTemplate } from './getDailyGatherTemplate';

describe('getDailyGatherTemplate 함수', () => {
  it('일일 취합 보고서 템플릿을 반환한다', () => {
    const { title, content } = getDailyGatherTemplate('10기', '240202', '구미', '이희진', '2');
    expect(title).toMatchSnapshot();
    expect(content).toMatchSnapshot();
  });
});
