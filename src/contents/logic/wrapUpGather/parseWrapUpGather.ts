import { Campus } from '@/types/Campus';
import { removeExtension } from '@/utils/removeExtension';

export const parseWrapUpGather = (fileName: string) => {
  const parsedStr = fileName.split('_');
  const cohort = parsedStr[0];
  const date = parsedStr[1];
  const day = parsedStr[4];
  const campus = parsedStr[5];
  return {
    cohort,
    date,
    day,
    campus: removeExtension(campus) as Campus,
  };
};
