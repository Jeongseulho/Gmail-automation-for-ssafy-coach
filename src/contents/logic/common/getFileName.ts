import { FILE_CATEGORY } from '@/constants/FileCategory';

export const getFileName = (attachedFiles: NodeListOf<Element>) => {
  if (attachedFiles.length === 0) {
    alert('파일이 첨부되지 않았습니다.');
    throw new Error('파일이 첨부되지 않았습니다.');
  }
  if (attachedFiles.length > 2) {
    alert('첨부파일이 3개 이상인 경우 지원하지 않습니다.');
    throw new Error('첨부파일이 3개 이상인 경우 지원하지 않습니다.');
  }
  if (attachedFiles.length === 2) {
    const jiraFile = Array.from(attachedFiles).find((file: Element) => file.textContent!.includes(FILE_CATEGORY.JIRA));
    if (!jiraFile) {
      alert('Jira 파일이 첨부되지 않았거나 파일 이름 형식이 잘못되었습니다.');
      throw new Error('Jira 파일이 첨부되지 않았거나 파일 이름 형식이 잘못되었습니다.');
    }
    return {
      attachedFileName: jiraFile.textContent!,
      isUnitWithJira: true,
    };
  }

  return {
    attachedFileName: attachedFiles[0].textContent!,
    isUnitWithJira: false,
  };
};
