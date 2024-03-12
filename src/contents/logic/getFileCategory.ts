import { FILE_CATEGORY } from '@/constants/FileCategory';

export const getFileCategory = (attachedFileName: string) => {
  // TODO: 정규표현식으로 파일명 검사 및 분류 고도화
  for (const category of Object.values(FILE_CATEGORY)) {
    if (attachedFileName.includes(category)) {
      return category;
    }
  }
  alert('파일명을 확인해주세요.');
  throw new Error('파일명을 확인해주세요.');
};
