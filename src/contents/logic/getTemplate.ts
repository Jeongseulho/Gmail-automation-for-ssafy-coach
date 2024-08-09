import { FILE_CATEGORY } from '@/constants/FileCategory';
import { FileCategoryValue } from '@/types/FileCategoryValue';
import { nameSelect } from '@/contents/logic/common/nameSelect';
import { parseDaily } from '@/contents/logic/daily/parseDaily';
import { parseJira } from '@/contents/logic/jira/parseJira';
import { parseDayOff } from '@/contents/logic/dayOff/parseDayOff';
import { getDayOffTemplate } from '@/contents/logic/dayOff/getDayOffTemplate';
import { getDailyGatherTemplate } from '@/contents/logic/dailyGather/getDailyGatherTemplate';
import { getDailyTemplate } from '@/contents/logic/daily/getDailyTemplate';
import { getJiraTemplate } from '@/contents/logic/jira/getJiraTemplate';
import { dayOffSelect } from '@/contents/logic/dayOff/dayOffSelect';
import { getUnitWithJiraTemplate } from '@/contents/logic/unitWithJira/getUnitWithJiraTemplate';
import { getUnitTemplate } from './unit/getUnitTemplate';
import { parseUnit } from './unit/parseUnit';
import { weekSelect } from './common/weekSelect';
import { parseWrapUpGather } from './wrapUpGather/parseWrapUpGather';
import { getWrapUpGatherTemplate } from './wrapUpGather/getWrapUpGatherTemplate';
import { parseWrapUp } from './wrapUp/parseWrapUp';
import { getWrapUpTemplate } from './wrapUp/getWrapUpTemplate';
import { WRAP_UP_GATHER_NAMES } from '@/constants/WrapUpGatherNames';
import { CLASS_CNT } from '@/constants/ClassCnt';
import { classCntSelect } from './common/classCntSelect';

export const getTemplate = async (attachedFileName: string, fileCategory: FileCategoryValue, isUnitWithJira: boolean) => {
  if (isUnitWithJira) {
    const { date, project, campus, classGroup, week, name1, name2 } = parseJira(attachedFileName);
    const name = await nameSelect(name1, name2);
    return getUnitWithJiraTemplate(date, project, campus, classGroup, week, name);
  }
  switch (fileCategory) {
    case FILE_CATEGORY.DAILY_GATHER: {
      const { cohort, date, campus, name } = parseDaily(attachedFileName, true);
      const classCnt = await classCntSelect(...CLASS_CNT);
      return getDailyGatherTemplate(cohort, date, campus, name, classCnt);
    }
    case FILE_CATEGORY.DAILY: {
      const { cohort, date, campus, classGroup, name } = parseDaily(attachedFileName);
      return getDailyTemplate(cohort, date, campus, classGroup || 'x반', name);
    }
    case FILE_CATEGORY.JIRA: {
      const { cohort, date, project, campus, classGroup, week, name1, name2 } = parseJira(attachedFileName);
      const name = await nameSelect(name1, name2);
      return getJiraTemplate(cohort, date, project, campus, classGroup, week, name);
    }
    case FILE_CATEGORY.UNIT: {
      const { cohort, date, project, campus, classGroup, name1, name2 } = parseUnit(attachedFileName);
      const name = await nameSelect(name1, name2);
      const selectedWeek = await weekSelect(project);
      return getUnitTemplate(cohort, date, project, campus, classGroup, selectedWeek, name);
    }
    case FILE_CATEGORY.DAY_OFF: {
      const { cohort, date, campus, name } = parseDayOff(attachedFileName);
      const dayOffCategory = await dayOffSelect();
      return getDayOffTemplate(cohort, date, campus, name, dayOffCategory);
    }
    case FILE_CATEGORY.WRAP_UP_GATHER: {
      const { cohort, date, day, campus } = parseWrapUpGather(attachedFileName);
      const selectedName = await nameSelect(...WRAP_UP_GATHER_NAMES);
      return getWrapUpGatherTemplate(cohort, date, day, campus, selectedName);
    }

    case FILE_CATEGORY.WRAP_UP: {
      const { cohort, date, day, campus, name } = parseWrapUp(attachedFileName);
      return getWrapUpTemplate(cohort, date, day, campus, name);
    }

    default: {
      alert('파일 이름을 파싱, 템플릿을 가져오는 과정에서 에러가 발생했습니다(파일 이름이 올바른지 확인해주세요).');
      throw new Error('파일 이름을 파싱, 템플릿을 가져오는 과정에서 에러가 발생했습니다(파일 이름이 올바른지 확인해주세요).');
    }
  }
};
