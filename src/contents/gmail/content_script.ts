import { mailBtn } from '../components/mailBtn';
import { init } from '../logic/init';

const btn = mailBtn();

btn.addEventListener('click', async () => {
  const titleInput = document.querySelector('[aria-label="제목"]') as HTMLInputElement;
  const contentInput = document.querySelector('div[aria-label="메일 본문"]') as HTMLDivElement;

  const attachedFiles = document.querySelectorAll('.vI');

  init(titleInput, contentInput, attachedFiles);
});
