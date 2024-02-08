export const formatDate = (str: string, isIncludeWeek: boolean = true) => {
  const year = parseInt(str.substring(0, 2), 10) + 2000; // '24' -> 2024
  const month = parseInt(str.substring(2, 4), 10) - 1; // '02' -> 1월 (0부터 시작)
  const day = parseInt(str.substring(4, 6), 10); // '02' -> 2일

  const date = new Date(year, month, day);

  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

  const formattedDate = `${date.getMonth() + 1}월 ${date.getDate()}일(${weekdays[date.getDay()]})`;

  return isIncludeWeek ? formattedDate : formattedDate.slice(0, -3);
};
