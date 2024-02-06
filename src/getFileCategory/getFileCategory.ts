import { FILE_CATEGORY } from '../constants/FileCategory';

export const getFileCategory = (attachedFileName: string) => {
  for (const category of Object.values(FILE_CATEGORY)) {
    if (attachedFileName.includes(category)) {
      return category;
    }
  }
};
