import { removeExtension } from '@/utils/removeExtension';

export const parseDayOff = (attachedFileName: string) => {
  const parsedStr = attachedFileName.split('_');
  const cohort = parsedStr[0];
  const date = parsedStr[1];
  const campus = parsedStr[3];
  const name = parsedStr[4];

  return {
    cohort,
    date,
    campus,
    name: removeExtension(name),
  };
};
