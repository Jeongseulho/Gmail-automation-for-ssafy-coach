import { getDailyGatherTemplate } from '../utils/dailyGather/getDailyGatherTemplate';
import { getDailyTemplate } from '../utils/daily/getDailyTemplate';
import { parseDaily } from '../utils/daily/parseDaily';

export const getTemplate = (attachedFileName: string) => {
  if (attachedFileName.includes('일일')) {
    if (attachedFileName.includes('취합')) {
      const { date, campus, name } = parseDaily(attachedFileName, true);
      return getDailyGatherTemplate(date, campus, name);
    }
    const { date, campus, classGroup, name } = parseDaily(attachedFileName);
    return getDailyTemplate(date, campus, classGroup || 'x반', name);
  }

  // if (attachedFileName.includes('주간Jira현황')) {
  //   const { date, campus, classGroup, week, name1, name2 } = parseJira(attachedFileName);
  // }
};
