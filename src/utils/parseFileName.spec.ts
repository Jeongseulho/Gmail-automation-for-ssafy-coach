import { parseFileName } from './parseFileName';

describe('parseFileName', () => {
  it('일일 보고서 파일 이름 파싱', () => {
    const dailyReport = '10기_240202_일일 프로젝트 진행_공통_구미_1반_이희진_오프라인';
  });

  it('일일 취합 보고서 파일 이름 파싱', () => {
    const weeklyReport = '10기_240201_일일 프로젝트 진행_공통_구미_취합_서은진';
  });

  it('주간 Jira 보고서 파일 이름 파싱', () => {
    const weeklyJiraReport = '10기_240202_주간Jira현황_공통_구미_1반_4주차_이희진_정슬호';
  });

  it('주간 단위업무 보고서 파일 이름 파싱', () => {
    const weeklyReport = '10기_240202_단위업무보고서_공통_구미_1반_이희진_정슬호';
  });

  it('휴가 신청서 파일 이름 파싱', () => {
    const vacation = '240201_휴가신청서_구미_이희진';
  });
});
