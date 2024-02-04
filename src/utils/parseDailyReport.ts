export const parseDailyReport = (fileName: string) => {
  const parsedStr = fileName.split('_');
  const date = parsedStr[1];
  const campus = parsedStr[4];
  const classGroup = parsedStr[5];
  const name = parsedStr[6];
  return {
    date,
    campus,
    classGroup,
    name,
  };
};
