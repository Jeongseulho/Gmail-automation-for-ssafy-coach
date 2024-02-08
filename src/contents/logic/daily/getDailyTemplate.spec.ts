import { getDailyTemplate } from './getDailyTemplate';

describe('getDailyTemplate 함수', () => {
  it('일일 보고서 템플릿을 반환한다', () => {
    const { title, content } = getDailyTemplate('240202', '구미', '1반', '이희진');
    expect(title).toMatchSnapshot();
    expect(content).toMatchSnapshot();
  });
});
