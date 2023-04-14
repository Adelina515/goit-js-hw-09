/*
Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay)+++ 
стільки разів, скільки ввели в поле amount. Під час кожного виклику передай їй номер промісу 
(position), що створюється, і затримку, враховуючи першу затримку (delay), введену користувачем,
 і крок (step).
Доповни код функції createPromise таким чином, щоб вона повертала один проміс, який виконується
або відхиляється через delay часу. Значенням промісу повинен бути об'єкт, в якому будуть 
властивості position і delay зі значеннями однойменних параметрів. Використовуй початковий код
 функції для вибору того, що потрібно зробити з промісом - виконати або відхилити.
*/
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refsForm = document.querySelector('.form');

refsForm.addEventListener('submit', handleSubmitForm);

function handleSubmitForm(ev) {
  ev.preventDefault();
  let delay = Number(refsForm.amount);
  for (let i = 1; i <= refsForm.amount.value; i += 1) {
  // console.log(i);
  createPromise(i, delay)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  delay += Number(refsForm.amount.value);  
}
}

function createPromise(position, delay) {
  const objPromise = { position, delay };
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(objPromise);
      } else {
        reject(objPromise);
      }
    }, delay);
  })
}
