import { getTemplate } from '@/contents/logic/getTemplate';
import { getFileCategory } from '@/contents/logic/getFileCategory';
import { getFileName } from '../logic/common/getFileName';

export const init = async (titleInput: HTMLInputElement, contentInput: HTMLDivElement, attachedFiles: NodeListOf<Element>) => {
  const { attachedFileName, isUnitWithJira } = getFileName(attachedFiles);
  const fileCategory = getFileCategory(attachedFileName);
  const template = await getTemplate(attachedFileName, fileCategory, isUnitWithJira);
  titleInput.value = template.title;
  contentInput.innerHTML = template.content;

  const today = new Date().toDateString();
  chrome.storage.local.clear();
  chrome.storage.local.set({ [today]: true });
};
