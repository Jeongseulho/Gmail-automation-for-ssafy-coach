import { DayOffCategory } from '@/types/DayOffCategory';

export const createDialog = <T extends string | DayOffCategory>(options: T[], title: string, callback: (selected: T) => void) => {
  // dialog 요소 생성
  const dialog = document.createElement('dialog');
  dialog.setAttribute('style', 'border: solid black 1px; border-radius: 8px; padding: 0px; ');

  // 컨테이너
  const container = document.createElement('div');
  container.setAttribute('style', 'padding: 10px;');

  // 버튼 컨테이너
  const buttonContainer = document.createElement('div');
  buttonContainer.setAttribute('style', 'display: flex; gap: 10px; justify-content: center; align-items: center;');

  // 제목 생성
  const h3Title = document.createElement('h3');
  h3Title.textContent = title;

  options.forEach((option) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.setAttribute('style', 'padding: 5px 10px; border: solid black 1px; border-radius: 3px; cursor: pointer;');
    button.onclick = () => {
      callback(option);
      dialog.close();
      document.body.removeChild(dialog);
    };
    buttonContainer.appendChild(button);
  });

  container.appendChild(h3Title);
  container.appendChild(buttonContainer);

  dialog.appendChild(container);

  document.body.appendChild(dialog);

  dialog.showModal();
};
