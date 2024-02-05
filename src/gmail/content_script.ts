import { parseDaily } from '../utils/daily/parseDaily';
import { getDailyTemplate } from '../utils/daily/getDailyTemplate';
import { createBtn } from './createBtn';
import { getDailyGatherTemplate } from '../utils/dailyGather/getDailyGatherTemplate';

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
      const { date, campus, name } = parseDaily(attachedFileName, true);
      template = getDailyGatherTemplate(date, campus, name);
    } else {
      const { date, campus, classGroup, name } = parseDaily(attachedFileName);
      template = getDailyTemplate(date, campus, classGroup || 'x반', name);
    }
  }

  titleInput.value = template.title;
  contentInput.innerHTML = template.content;
  return;
});

document.body.appendChild(btn);
