import { createDialog } from '@/contents/components/createDialog';

export const nameSelect = (name1: string, name2: string): Promise<string> => {
  return new Promise((resolve) => {
    createDialog(name1, name2, (selectedName: string) => resolve(selectedName));
  });
};
