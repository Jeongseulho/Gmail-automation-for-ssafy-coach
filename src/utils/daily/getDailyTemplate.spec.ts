import { getDailyTemplate } from './getDailyTemplate';

describe('getDailyTemplate 함수', () => {
  const { title, content } = getDailyTemplate('240202', '구미', '1반', '이희진');
  it('제목 템플릿을 반환한다', () => {
    expect(title).toMatchSnapshot();
  });

  it('내용 템플릿을 반환한다', () => {
    expect(content).toMatchSnapshot();
  });
});
