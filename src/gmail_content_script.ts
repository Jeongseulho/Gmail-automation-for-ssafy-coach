const createBtn = () => {
  const btn = document.createElement('button');
  btn.style.width = '70px';
  btn.style.height = '70px';
  btn.style.position = 'fixed';
  btn.style.bottom = '50px';
  btn.style.right = '0px';
  btn.style.zIndex = '9999';
  btn.style.border = 'none';
  btn.style.borderRadius = '10px';
  btn.style.padding = '0px';
  const imgUrl = chrome.runtime.getURL('/assets/btn.png');
  btn.style.backgroundImage = `url(${imgUrl})`;
  btn.style.backgroundRepeat = 'no-repeat';
  btn.style.backgroundSize = 'contain';
  btn.style.cursor = 'pointer';
  return btn;
};

const getKeywords = () => {};

const btn = createBtn();
document.body.appendChild(btn);
btn.addEventListener('click', () => {
  const attachedFileName = document.querySelector('.vI')?.textContent;
});
