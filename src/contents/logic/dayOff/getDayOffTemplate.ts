import { DayOffCategory } from '@/types/DayOffCategory';
import { formatDate } from '@/utils/formatDate';

export const getDayOffTemplate = (cohort: string, date: string, campus: string, classGroup: string, name: string, dayOffCategory: DayOffCategory) => {
  const title = `[SSAFY] ${formatDate(date)} ${campus} ${classGroup} 실습코치 ${name} ${dayOffCategory} 신청서 송부`;
  const content = `
    <div>안녕하십니까, ${cohort} ${campus} 실습코치 ${name}입니다.</div>
    <br>
    <div>${formatDate(date)} ${dayOffCategory} 신청서 첨부파일로 송부 드립니다.</div>
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
