import { formatDate } from './formatDate';

export const getDailyTemplate = (date: string, campus: string, classSection: string, name: string) => {
  const formattedDate = formatDate(date);
  const title = '[SSAFY]' + ' ' + formattedDate + ' ' + campus + ' ' + classSection + ' ' + '실습코치' + ' ' + name + ' ' + '일일 보고서 송부';
  const content = `안녕하세요.
      <br>
      ${campus} 실습코치 ${name}입니다.
      <br>
      <br>
      ${formattedDate.slice(0, 5)} 일일 프로젝트 진행 보고서 첨부파일로 송부 드립니다.
      <br>
      <br>
      <b>특이사항</b>
      <br>
      해당 사항 없음.
      <br>
      <br>
      감사합니다.
      <br>
      이희진 드림.`;
  return {
    title,
    content,
  };
};
