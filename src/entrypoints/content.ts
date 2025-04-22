import { storage } from 'wxt/utils/storage';

function injectButton() {
  const button = document.createElement('div');

  button.innerHTML = `
    <button id="my-extension-btn" 
      style="
        background-color: #0070ff;
        color: #fff;
        padding: 10px;
        border-radius: 12px;
        margin: 10px;
        cursor: pointer; font-weight: bold;"
      >
      Extension Action
    </button>
  `;
  document.getElementsByClassName('noprint')[0].appendChild(button);
}

export default defineContentScript({
  matches: ['*://hh.ru/vacancy/*'],
  main() {
    storage.getItems(['local:userSettings']).then((settings) => {
      console.log(settings);
    });
  },
});
