import { parseJira } from '@/contents/logic/jira/parseJira';
import { nameSelect } from '@/contents/logic/common/nameSelect';

export const getUnitWithJiraTemplate = async (jiraFileName: string) => {
  const { date, project, campus, classGroup, week, name1, name2 } = parseJira(jiraFileName);
  const selectedName = await nameSelect(name1, name2);
  const title = `[SSAFY] ${date} ${campus} ${classGroup} ${project} ${week} 주간 Jira 현황 보고서 및 단위 업무 보고서 송부`;
  const content = `
    <div>안녕하세요.</div>
    <div>${campus} 실습코치 ${selectedName}입니다.</div>
    <br>
    <div>${campus} ${classGroup} 금주 단위 업무 보고서 및 Jira 현황 보고서 첨부파일로 송부 드립니다.</div>
    <br>
    <b>특이사항</b>
    <br>
    <div>해당 사항 없음.</div>
    <br>
    <div>감사합니다.</div>
    <div>${selectedName} 드림.</div>
  `;

  return {
    title,
    content,
  };
};
