import { getDailyGatherTemplate } from './getDailyGatherTemplate';

describe('getDailyGatherTemplate 함수', () => {
  const { title, content } = getDailyGatherTemplate('240202', '구미', '이희진');
  it('제목 템플릿을 반환한다', () => {
    expect(title).toMatchSnapshot();
  });

  it('내용 템플릿을 반환한다', () => {
    expect(content).toMatchSnapshot();
  });
});
