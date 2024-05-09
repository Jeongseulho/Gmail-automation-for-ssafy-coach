import { createDialog } from '@/contents/components/createDialog';
import { Project } from '@/types/Project';
import { Week } from '@/types/Week';

export const weekSelect = (project: Project): Promise<Week> => {
  return new Promise((resolve) => {
    if (project === '자율') {
      createDialog(['2주차', '6주차'], '프로젝트 주차를 선택해주세요.', (selectedWeek: Week) => resolve(selectedWeek));
    } else {
      createDialog(['1주차', '3주차', '4주차', '6주차'], '프로젝트 주차를 선택해주세요.', (selectedWeek: Week) => resolve(selectedWeek));
    }
  });
};
