export const parseDailyReport = (fileName: string) => {
  const parsedStr = fileName.split('_');
  const date = parsedStr[1];
  const campus = parsedStr[4];
  const classSection = parsedStr[5];
  const name = parsedStr[6];
  return {
    date,
    campus,
    classSection,
    name,
  };
};
