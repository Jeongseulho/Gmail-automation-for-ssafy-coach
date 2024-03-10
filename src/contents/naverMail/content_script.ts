import { getTemplate } from '@/contents/logic/getTemplate';
import { getFileCategory } from '@/contents/logic/getFileCategory';
import { getFileName } from '../logic/common/getFileName';
import { mailBtn } from '../components/mailBtn';

const btn = mailBtn();

btn.addEventListener('click', async () => {
  const titleInput = document.querySelector('#subject_title') as HTMLInputElement;
  titleInput.focus();
  const editorIframe = document.querySelector('.editor_body>iframe') as HTMLIFrameElement;
  const iframeDocument = editorIframe.contentWindow!.document;
  const contentInput = iframeDocument.querySelector('.workseditor-content') as HTMLDivElement;

  const attachedFiles = document.querySelectorAll('.file_title>.text');

  const { attachedFileName, isUnitWithJira } = getFileName(attachedFiles);
  const fileCategory = getFileCategory(attachedFileName);
  const template = await getTemplate(attachedFileName, fileCategory, isUnitWithJira);
  titleInput.value = template.title;
  contentInput.innerHTML = template.content;
});
