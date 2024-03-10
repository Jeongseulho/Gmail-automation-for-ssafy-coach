import { getTemplate } from '@/contents/logic/getTemplate';
import { getFileCategory } from '@/contents/logic/getFileCategory';
import { mailBtn } from '../components/mailBtn';
import { getFileName } from '../logic/common/getFileName';

const btn = mailBtn();

btn.addEventListener('click', async () => {
  const titleInput = document.querySelector('[aria-label="제목"]') as HTMLInputElement;
  const contentInput = document.querySelector('div[aria-label="메일 본문"]') as HTMLDivElement;

  const attachedFiles = document.querySelectorAll('.vI');

  const { attachedFileName, isUnitWithJira } = getFileName(attachedFiles);
  const fileCategory = getFileCategory(attachedFileName);
  const template = await getTemplate(attachedFileName, fileCategory, isUnitWithJira);
  titleInput.value = template.title;
  contentInput.innerHTML = template.content;

  const today = new Date().toDateString();
  chrome.storage.local.clear();
  chrome.storage.local.set({ [today]: true });
});
