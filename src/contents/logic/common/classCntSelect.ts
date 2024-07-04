import { createDialog } from '@/contents/components/createDialog';

export const classCntSelect = (...cnt: string[]): Promise<string> => {
  return new Promise((resolve) => {
    createDialog([...cnt], '반 개수를 선택해주세요.', (selectedCnt: string) => resolve(selectedCnt));
  });
};
