import { formatDate } from '@/utils/formatDate';
import { Week } from '@/types/Week';
import { Campus } from '@/types/Campus';
import { Project } from '@/types/Project';

export const getUnitTemplate = async (date: string, project: Project, campus: Campus, classGroup: string, week: Week, name: string) => {
  const title = `[SSAFY] ${formatDate(date)} ${campus} ${classGroup} ${project} ${week} 단위 업무 보고서 송부`;
  const content = `
    <div>안녕하세요.</div>
    <div>${campus} 실습코치 ${name}입니다.</div>
    <br>
    <div>${formatDate(date, false)} 단위 업무 보고서 첨부파일로 송부드립니다.</div>
    <br>
    <div>감사합니다.</div>
    <div>${name} 드림.</div>
  `;

  return {
    title,
    content,
  };
};
