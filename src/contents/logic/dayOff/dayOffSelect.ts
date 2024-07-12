import { createDialog } from '@/contents/components/createDialog';
import { DayOffCategory } from '@/types/DayOffCategory';

export const dayOffSelect = (): Promise<DayOffCategory> => {
  return new Promise((resolve) => {
    createDialog(['오전 반차', '오후 반차', '연차'], '휴가 종류를 선택해주세요.', (selectedDayOff: DayOffCategory) => resolve(selectedDayOff));
  });
};
