import { Campus } from '@/types/Campus';
import { formatDate } from '@/utils/formatDate';

export const getDailyTemplate = (cohort: string, date: string, campus: Campus, classSection: string, name: string) => {
  const title = `[SSAFY] ${formatDate(date)} ${campus} ${classSection} 실습코치 ${name} 일일 보고서 송부`;
  const content = `
    <div>안녕하십니까, ${cohort} ${campus} 실습코치 ${name}입니다.</div>
    <br>
    <div>${formatDate(date)} 일일 프로젝트 진행 보고서 첨부파일로 송부 드립니다.</div>
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
