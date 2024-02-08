import { getFileCategory } from './getFileCategory';
import { FILE_CATEGORY } from '@/constants/FileCategory';

describe('getFileCategory 함수', () => {
  it('일일 취합 보고서 파일 감지', () => {
    expect(getFileCategory('10기_240205_일일 프로젝트 진행_공통_구미_취합_이희진.docx')).toBe(FILE_CATEGORY.DAILY_GATHER);
  });

  it('일일 보고서 파일 감지', () => {
    expect(getFileCategory('10기_240206_일일 프로젝트 진행_공통_구미_1반_정슬호_오프라인.docx')).toBe(FILE_CATEGORY.DAILY);
  });

  it('주간 Jira 보고서 파일 감지', () => {
    expect(getFileCategory('10기_240126_주간Jira현황_공통_구미_1반_3주차_이희진_정슬호.xlsx')).toBe(FILE_CATEGORY.JIRA);
  });

  it('주간 단위업무보고서 파일 감지', () => {
    expect(getFileCategory('10기_240126_단위업무보고서_공통_구미_1반_이희진_정슬호.xlsx')).toBe(FILE_CATEGORY.UNIT);
  });

  it('휴가신청서 파일 감지', () => {
    expect(getFileCategory('240201_휴가신청서_구미_이희진.docx')).toBe(FILE_CATEGORY.DAY_OFF);
  });

  it('잘못된 파일명이 들어왔을 때', () => {
    const wrongFileName = 'unknown_file.txt';

    expect(() => {
      getFileCategory(wrongFileName);
    }).toThrow('파일명을 확인해주세요.');
  });
});
