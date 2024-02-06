import { getDailyGatherTemplate } from '../utils/dailyGather/getDailyGatherTemplate';
import { FILE_CATEGORY } from '../constants/FileCategory';
import { getDailyTemplate } from '../utils/daily/getDailyTemplate';
import { parseDaily } from '../utils/daily/parseDaily';
import { FileCategoryValue } from '../types/FileCategoryValue';

export const getTemplate = (attachedFileName: string, fileCategory: FileCategoryValue) => {
  switch (fileCategory) {
    case FILE_CATEGORY.DAILY_GATHER: {
      const { date, campus, name } = parseDaily(attachedFileName, true);
      return getDailyGatherTemplate(date, campus, name);
    }
    case FILE_CATEGORY.DAILY: {
      const { date, campus, classGroup, name } = parseDaily(attachedFileName);
      return getDailyTemplate(date, campus, classGroup || 'x반', name);
    }
    default: {
      throw new Error('파일 이름을 파싱, 템플릿을 가져오는 과정에서 에러가 발생했습니다.');
    }
  }
};
