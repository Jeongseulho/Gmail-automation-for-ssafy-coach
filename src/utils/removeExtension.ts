export const removeExtension = (fileName: string) => {
  return fileName.replace(/\.[^/.]+$/, '');
};
