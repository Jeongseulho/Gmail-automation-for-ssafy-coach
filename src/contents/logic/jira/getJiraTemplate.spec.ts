import { getJiraTemplate } from './getJiraTemplate';

describe('getJiraTemplate 함수', () => {
  const { title, content } = getJiraTemplate('10기', '240202', '공통', '구미', '1반', '3주차', '이희진');
  it('제목 템플릿을 반환', () => {
    expect(title).toMatchSnapshot();
  });
  it('내용 템플릿을 반환', () => {
    expect(content).toMatchSnapshot();
  });
});
