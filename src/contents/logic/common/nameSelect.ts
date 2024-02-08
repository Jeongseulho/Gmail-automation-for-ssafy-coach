import { createDialog } from '@/contents/components/createDialog';

export const nameSelect = (name1: string, name2: string): Promise<string> => {
  return new Promise((resolve) => {
    createDialog([name1, name2], '작성자 이름을 선택해주세요.', (selectedName: string) => resolve(selectedName));
  });
};
