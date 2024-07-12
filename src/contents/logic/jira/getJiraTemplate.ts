import { Campus } from '@/types/Campus';
import { Project } from '@/types/Project';
import { Week } from '@/types/Week';
import { formatDate } from '@/utils/formatDate';

export const getJiraTemplate = (cohort: string, date: string, project: Project, campus: Campus, classGroup: string, week: Week, name: string) => {
  const title = `[SSAFY] ${formatDate(date)} ${campus} ${classGroup} ${project} ${week} 주간 Jira 현황 보고서 송부`;
  const content = `
    <div>안녕하십니까, ${cohort} ${campus} 실습코치 ${name}입니다.</div>
    <br>
    <div>${campus} ${classGroup} 금주 주간 Jira 현황 보고서 첨부파일로 송부 드립니다.</div>
    <br>
    <b>특이사항</b>
    <br>
    <div>- 해당 사항 없음.</div>
    <br>
    <div>감사합니다.</div>
    <div>${name} 드림.</div>
  `;
  return {
    title,
    content,
  };
};
