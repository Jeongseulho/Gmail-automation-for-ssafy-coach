import { Campus } from '@/types/Campus';
import { removeExtension } from '@/utils/removeExtension';

export const parseWrapUp = (fileName: string) => {
  const parsedStr = fileName.split('_');
  const cohort = parsedStr[0];
  const date = parsedStr[1];
  const day = parsedStr[4];
  const campus = parsedStr[5];
  const name = parsedStr[6];
  return {
    cohort,
    date,
    day,
    campus: campus as Campus,
    name: removeExtension(name),
  };
};
