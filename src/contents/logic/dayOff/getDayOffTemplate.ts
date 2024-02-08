import { DayOffCategory } from '@/types/DayOffCategory';
import { formatDate } from '@/utils/formatDate';

export const getDayOffTemplate = (date: string, campus: string, name: string, selectedDayOffCategory: DayOffCategory) => {
  const dayOffCategoryStr = selectedDayOffCategory === '하루 휴가' ? '' : `(${selectedDayOffCategory})`;
  const title = `[SSAFY] ${formatDate(date)} ${campus} 실습코치 ${name} 휴가신청서 송부`;
  const content = `
    <div>안녕하세요.</div>
    <div>${campus} 실습코치 ${name}입니다.</div>
    <br>
    <div>${formatDate(date)} 휴가${dayOffCategoryStr} 신청서 첨부파일로 송부드립니다.</div>
    <br>
    <b>특이사항</b>
    <br>
    <div>해당 사항 없음.</div>
    <br>
    <div>감사합니다.</div>
    <div>${name} 드림.</div>
  `;
  return {
    title,
    content,
  };
};
