import { createBtn } from './createBtn';

const btn = createBtn();
document.body.appendChild(btn);
btn.addEventListener('click', () => {
  const attachedFileName = document.querySelector('.vI')?.textContent;
});
