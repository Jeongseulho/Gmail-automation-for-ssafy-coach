import { getTemplate } from '@/contents/logic/common/getTemplate';
import { getFileCategory } from '@/contents/logic/common/getFileCategory';
import { createBtn } from './createBtn';

const btn = createBtn();

btn.addEventListener('click', async () => {
  const attachedFileName = document.querySelector('.vI')?.textContent;
  if (!attachedFileName) return alert('파일이 첨부되지 않았습니다.');
  const titleInput = document.querySelector('[aria-label="제목"]') as HTMLInputElement;
  const contentInput = document.querySelector('div[aria-label="메일 본문"]') as HTMLDivElement;

  const fileCategory = getFileCategory(attachedFileName);
  const template = await getTemplate(attachedFileName, fileCategory);

  titleInput.value = template.title;
  contentInput.innerHTML = template.content;
});

document.body.appendChild(btn);
