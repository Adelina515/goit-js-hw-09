import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    startBtn: document.querySelector('[data-start]'),
    timer: document.querySelector('.timer'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    // const nowDate = new Date();
    currentSelectDate(selectedDates[0]);
   
  },
};
flatpickr('input#datetime-picker', options);

let changeTimeToEnd;
let remainderDates;
let timerId;
function currentSelectDate(selectedDates) {
  const currentDate = Date.now();
 if (selectedDates < currentDate) {
      window.alert("Please choose a date in the future");
    }
    refs.startBtn.disabled = false;
  
    changeTimeToEnd = selectedDates.getTime() - currentDate;
    remainderDates = convertMs(changeTimeToEnd);
    timeWatch(remainderDates);
  
}




refs.startBtn.addEventListener('click', handleBtnStart);

function handleBtnStart() {
  timerId = setInterval(() => {
    refs.startBtn.disabled = true;
    changeTimeToEnd -= 1000;
    if (refs.seconds.textContent <= 0 && refs.minutes.textContent <= 0 && refs.hours.textContent <= 0 && refs.days.textContent <= 0) {
      window.alert('the and');
      clearInterval(timerId);
    } else {
        remainderDates = convertMs(changeTimeToEnd);
       timeWatch(remainderDates);
      if (refs.seconds.textContent < 10 || refs.minutes.textContent < 10 || refs.hours.textContent < 10 ) {
        addLeadingZero(remainderDates);
      }
     
    }
  }, 1000);
}

function addLeadingZero(value){
    return String(value).padStart(2, '0');
}


function timeWatch(remainderDates) {
  refs.seconds.textContent = remainderDates.seconds;
  refs.minutes.textContent = remainderDates.minutes;
  refs.hours.textContent = remainderDates.hours;
  refs.days.textContent = remainderDates.days;
}




function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}