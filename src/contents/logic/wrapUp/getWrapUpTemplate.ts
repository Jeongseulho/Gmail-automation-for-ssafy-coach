import { Campus } from '@/types/Campus';
import { formatDate } from '@/utils/formatDate';

export const getWrapUpTemplate = (cohort: string, date: string, day: string, campus: Campus, name: string) => {
  const title = `[SSAFY] ${cohort} ${campus} 실습코치 ${name} ${day} Wrap Up 송부`;

  const content = `
    <div>안녕하십니까, ${cohort} ${campus} 실습코치 ${name}입니다.</div>
    <br>
    <div>${formatDate(date)} ${day} Wrap Up 보고서 첨부파일로 송부드립니다.</div>
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
