import { getTemplate } from '@/contents/logic/getTemplate';
import { getFileCategory } from '@/contents/logic/getFileCategory';
import { getUnitWithJiraTemplate } from '@/contents/logic/unitWithJira/getUnitWithJiraTemplate';
import { FILE_CATEGORY } from '@/constants/FileCategory';
import { mailBtn } from '../components/mailBtn';

const btn = mailBtn();

btn.addEventListener('click', async () => {
  const titleInput = document.querySelector('#subject_title') as HTMLInputElement;
  titleInput.focus();
  const editorIframe = document.querySelector('.editor_body>iframe') as HTMLIFrameElement;
  const iframeDocument = editorIframe.contentWindow!.document;
  const contentInput = iframeDocument.querySelector('.workseditor-content') as HTMLDivElement;

  const attachedFiles = document.querySelectorAll('.file_title>.text');
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
