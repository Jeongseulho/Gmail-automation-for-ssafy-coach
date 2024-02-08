export const createDialog = (name1: string, name2: string, callback: (selectedName: string) => void) => {
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
  const title = document.createElement('h3');
  title.textContent = '작성자 이름을 선택해주세요.';

  // name1 버튼 생성
  const name1Button = document.createElement('button');
  name1Button.textContent = name1;
  name1Button.onclick = () => {
    callback(name1);
    dialog.close();
    document.body.removeChild(dialog);
  };

  // name2 버튼 생성
  const name2Button = document.createElement('button');
  name2Button.textContent = name2;
  name2Button.onclick = () => {
    callback(name2);
    dialog.close();
    document.body.removeChild(dialog);
  };

  buttonContainer.appendChild(name1Button);
  buttonContainer.appendChild(name2Button);

  container.appendChild(title);
  container.appendChild(buttonContainer);

  dialog.appendChild(container);

  document.body.appendChild(dialog);

  dialog.showModal();
};
