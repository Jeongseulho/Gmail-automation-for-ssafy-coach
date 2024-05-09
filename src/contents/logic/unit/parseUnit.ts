import { Campus } from '@/types/Campus';
import { Project } from '@/types/Project';
import { removeExtension } from '@/utils/removeExtension';

export const parseUnit = (fileName: string) => {
  const parsedStr = fileName.split('_');
  const date = parsedStr[1];
  const project = parsedStr[3];
  const campus = parsedStr[4];
  const classGroup = parsedStr[5];
  const name1 = parsedStr[6];
  const name2 = parsedStr[7];
  return {
    date,
    project: project as Project,
    campus: campus as Campus,
    classGroup,
    name1,
    name2: removeExtension(name2),
  };
};
