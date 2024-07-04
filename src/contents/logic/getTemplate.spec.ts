import { getTemplate } from './getTemplate';
import { FILE_CATEGORY } from '@/constants/FileCategory';

describe('getTemplate 함수', () => {
  it('일일 보고서 템플릿 반환', async () => {
    const template = await getTemplate('10기_240206_일일 프로젝트 진행_공통_구미_1반_정슬호_오프라인.docx', FILE_CATEGORY.DAILY, false);
    expect(template).toMatchSnapshot();
  });
});
