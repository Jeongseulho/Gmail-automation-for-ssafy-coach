import { Campus } from '@/types/Campus';
import { removeExtension } from '@/utils/common/removeExtension';

export const parseDaily = (fileName: string, isGather: boolean = false) => {
  const parsedStr = fileName.split('_');
  const date = parsedStr[1];
  const campus = parsedStr[4];
  const classGroup = parsedStr[5];
  const name = parsedStr[6];

  if (isGather) {
    return {
      date,
      campus: campus as Campus,
      name: removeExtension(name),
    };
  }

  return {
    date,
    campus: campus as Campus,
    classGroup,
    name,
  };
};
