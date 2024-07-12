import { createDialog } from '@/contents/components/createDialog';

export const classGroupSelect = (): Promise<string> => {
  return new Promise((resolve) => {
    createDialog(['1반', '2반', '3반', '4반', '5반', '6반', '7반', '8반'], '담당하는 반을 선택해주세요.', (selectedClassGroup: string) =>
      resolve(selectedClassGroup),
    );
  });
};
