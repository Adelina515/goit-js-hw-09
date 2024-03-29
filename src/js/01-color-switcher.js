/*
Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body>
 на випадкове значення, використовуючи інлайн стиль. Натисканням на кнопку «Stop» зміна 
 кольору фону повинна зупинятися.

УВАГА
Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. Зроби так, 
щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).
Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
} */

const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

refs.startBtn.addEventListener("click", handleBtnStart);
refs.stopBtn.addEventListener("click", handleBtnStop);

let timerId;

function handleBtnStart () {
   
  timerId = setInterval(() => {
    const rendomColor = getRandomHexColor();
    refs.body.style.backgroundColor = rendomColor;
  }, 1000);
  
   refs.stopBtn.disabled = false;
   refs.startBtn.disabled = true;
};
  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }


function handleBtnStop(ev) {
  clearInterval(timerId);
  refs.stopBtn.disabled = true;
  refs.startBtn.disabled = false;
};
