import { parseDailyReport } from '../utils/daily/parseDailyReport';
import { getDailyTemplate } from '../utils/daily/getDailyTemplate';
import { createBtn } from './createBtn';

const btn = createBtn();

btn.addEventListener('click', () => {
  const attachedFileName = document.querySelector('.vI')?.textContent;
  const titleInput = document.querySelector('[aria-label="제목"]') as HTMLInputElement;
  const contentInput = document.querySelector('div[aria-label="메일 본문"]') as HTMLDivElement;

  if (!attachedFileName) {
    return alert('파일이 첨부되지 않았습니다.');
  }

  let template = { title: '', content: '' };

  if (attachedFileName.includes('일일')) {
    if (attachedFileName.includes('취합')) {
      return;
    } else {
      const { date, campus, classGroup, name } = parseDailyReport(attachedFileName);
      template = getDailyTemplate(date, campus, classGroup, name);
    }
  }

  titleInput.value = template.title;
  contentInput.innerHTML = template.content;
  return;
});

document.body.appendChild(btn);
