import { Campus } from '@/types/Campus';
import { Project } from '@/types/Project';
import { Week } from '@/types/Week';
import { removeExtension } from '@/utils/removeExtension';

export const parseJira = (fileName: string) => {
  const parsedStr = fileName.split('_');
  const cohort = parsedStr[0];
  const date = parsedStr[1];
  const project = parsedStr[3];
  const campus = parsedStr[4];
  const classGroup = parsedStr[5];
  const week = parsedStr[6];
  const name = parsedStr[7];
  return {
    cohort,
    date,
    project: project as Project,
    campus: campus as Campus,
    classGroup,
    week: week as Week,
    name: removeExtension(name),
  };
};
