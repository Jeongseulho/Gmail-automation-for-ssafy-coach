export const parseFileName = (attachedFileName: string) => {
  if (attachedFileName.includes('일일')) {
    if (attachedFileName.includes('취합')) {
      return '일일 취합 보고서';
    }
    return '일일 보고서';
  }
};
