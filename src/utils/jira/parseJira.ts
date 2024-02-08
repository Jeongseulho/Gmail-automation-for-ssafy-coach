import { removeExtension } from '@/utils/common/removeExtension';
import { Campus } from '@/types/Campus';
import { Project } from '@/types/Project';
import { Week } from '@/types/Week';

export const parseJira = (fileName: string) => {
  const parsedStr = fileName.split('_');
  const date = parsedStr[1];
  const project = parsedStr[3];
  const campus = parsedStr[4];
  const classGroup = parsedStr[5];
  const week = parsedStr[6];
  const name1 = parsedStr[7];
  const name2 = parsedStr[8];
  return {
    date,
    project: project as Project,
    campus: campus as Campus,
    classGroup,
    week: week as Week,
    name1,
    name2: removeExtension(name2),
  };
};
