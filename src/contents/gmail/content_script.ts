import { getTemplate } from '@/contents/logic/common/getTemplate';
import { getFileCategory } from '@/contents/logic/common/getFileCategory';
import { createBtn } from './createBtn';
import { getUnitWithJiraTemplate } from '@/contents/logic/unitWithJira/getUnitWithJiraTemplate';
import { FILE_CATEGORY } from '@/constants/FileCategory';

const btn = createBtn();

btn.addEventListener('click', async () => {
  const titleInput = document.querySelector('[aria-label="제목"]') as HTMLInputElement;
  const contentInput = document.querySelector('div[aria-label="메일 본문"]') as HTMLDivElement;

  const attachedFiles = document.querySelectorAll('.vI');
  if (attachedFiles.length === 0) return alert('파일이 첨부되지 않았습니다.');
  if (attachedFiles.length > 2) return alert('첨부파일이 3개 이상인 경우 지원하지 않습니다.');
  if (attachedFiles.length === 2) {
    const jiraFile = Array.from(attachedFiles).find((file: Element) => file.textContent!.includes(FILE_CATEGORY.JIRA));
    if (!jiraFile) return alert('Jira 파일이 첨부되지 않았거나 파일 이름 형식이 잘못되었습니다.');
    const template = await getUnitWithJiraTemplate(jiraFile.textContent!);
    titleInput.value = template.title;
    contentInput.innerHTML = template.content;
    return;
  }
  const attachedFileName = attachedFiles[0].textContent!;
  const fileCategory = getFileCategory(attachedFileName);
  const template = await getTemplate(attachedFileName, fileCategory);
  titleInput.value = template.title;
  contentInput.innerHTML = template.content;
});

document.body.appendChild(btn);
