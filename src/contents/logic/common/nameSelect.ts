import { createDialog } from '@/contents/components/createDialog';

export const nameSelect = (...names: string[]): Promise<string> => {
  return new Promise((resolve) => {
    createDialog([...names], '작성자 이름을 선택해주세요.', (selectedName: string) => resolve(selectedName));
  });
};
