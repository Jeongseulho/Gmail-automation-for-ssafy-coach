import { mailBtn } from '../components/mailBtn';
import { init } from '../logic/init';

const btn = mailBtn();

btn.addEventListener('click', async () => {
  const titleInput = document.querySelector('#subject_title') as HTMLInputElement;
  titleInput.focus();
  const editorIframe = document.querySelector('.editor_body>iframe') as HTMLIFrameElement;
  const iframeDocument = editorIframe.contentWindow!.document;
  const contentInput = iframeDocument.querySelector('.workseditor-content') as HTMLDivElement;

  const attachedFiles = document.querySelectorAll('.file_title>.text');

  init(titleInput, contentInput, attachedFiles);
});
