import { getFileCategory } from '../getFileCategory/getFileCategory';
import { getTemplate } from '../getTemplate/getTemplate';
import { createBtn } from './createBtn';

const btn = createBtn();

btn.addEventListener('click', () => {
  const attachedFileName = document.querySelector('.vI')?.textContent;
  const titleInput = document.querySelector('[aria-label="제목"]') as HTMLInputElement;
  const contentInput = document.querySelector('div[aria-label="메일 본문"]') as HTMLDivElement;

  if (!attachedFileName) return alert('파일이 첨부되지 않았습니다.');

  const fileCategory = getFileCategory(attachedFileName);
  if (!fileCategory) return alert('파일명을 확인해주세요.');

  const template = getTemplate(attachedFileName, fileCategory);

  titleInput.value = template.title;
  contentInput.innerHTML = template.content;
});

document.body.appendChild(btn);
