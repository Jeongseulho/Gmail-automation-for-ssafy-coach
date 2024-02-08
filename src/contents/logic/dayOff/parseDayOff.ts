import { removeExtension } from '@/utils/removeExtension';

export const parseDayOff = (attachedFileName: string) => {
  const parsedStr = attachedFileName.split('_');
  const date = parsedStr[0];
  const campus = parsedStr[2];
  const name = parsedStr[3];

  return {
    date,
    campus,
    name: removeExtension(name),
  };
};
