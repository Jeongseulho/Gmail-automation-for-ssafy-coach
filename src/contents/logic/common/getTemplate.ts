import { FILE_CATEGORY } from '@/constants/FileCategory';
import { FileCategoryValue } from '@/types/FileCategoryValue';
import { nameSelect } from './nameSelect';
import { parseDaily } from '@/contents/logic/daily/parseDaily';
import { parseJira } from '@/contents/logic/jira/parseJira';
import { getDailyGatherTemplate } from '../dailyGather/getDailyGatherTemplate';
import { getDailyTemplate } from '../daily/getDailyTemplate';
import { getJiraTemplate } from '../jira/getJiraTemplate';
import { parseDayOff } from '@/contents/logic/dayOff/parseDayOff';
import { getDayOffTemplate } from '@/contents/logic/dayOff/getDayOffTemplate';
import { dayOffSelect } from '../dayOff/dayOffSelect';

export const getTemplate = async (attachedFileName: string, fileCategory: FileCategoryValue) => {
  switch (fileCategory) {
    case FILE_CATEGORY.DAILY_GATHER: {
      const { date, campus, name } = parseDaily(attachedFileName, true);
      return getDailyGatherTemplate(date, campus, name);
    }
    case FILE_CATEGORY.DAILY: {
      const { date, campus, classGroup, name } = parseDaily(attachedFileName);
      return getDailyTemplate(date, campus, classGroup || 'x반', name);
    }
    case FILE_CATEGORY.JIRA: {
      const { date, project, campus, classGroup, week, name1, name2 } = parseJira(attachedFileName);
      const selectedName = await nameSelect(name1, name2);
      return getJiraTemplate(date, project, campus, classGroup, week, selectedName);
    }
    case FILE_CATEGORY.DAY_OFF: {
      const { date, campus, name } = parseDayOff(attachedFileName);
      const selectedDayOffCategory = await dayOffSelect();
      return getDayOffTemplate(date, campus, name, selectedDayOffCategory);
    }

    default: {
      alert('파일 이름을 파싱, 템플릿을 가져오는 과정에서 에러가 발생했습니다.');
      throw new Error('파일 이름을 파싱, 템플릿을 가져오는 과정에서 에러가 발생했습니다.');
    }
  }
};
