import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


let userSelectedDate = null;

const btnStart = document.querySelector("[data-start]");
const dateInput = document.querySelector("#datetime-picker");
const daysSpan = document.querySelector("[data-days]");
const hoursSpan = document.querySelector("[data-hours]");
const minutesSpan = document.querySelector("[data-minutes]");
const secondsSpan = document.querySelector("[data-seconds]");

btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      
      if (selectedDates[0] <= new Date()) {
          iziToast.warning({
          message: 'Please choose a date in the future'
});
          btnStart.disabled = true;
          return 
      }
      btnStart.disabled = false;
      userSelectedDate = selectedDates[0];
      console.log(selectedDates[0]);
  },
};
flatpickr("#datetime-picker", options);

btnStart.addEventListener("click", startTimer);
function startTimer() {
    btnStart.disabled = true;
    dateInput.disabled = true;

    const intervalId = setInterval(() => {
        const date = convertMs(userSelectedDate - new Date());
        daysSpan.textContent = addLeadingZero(date.days);
        hoursSpan.textContent = addLeadingZero(date.hours);
        minutesSpan.textContent = addLeadingZero(date.minutes);
        secondsSpan.textContent = addLeadingZero(date.seconds);
        if (userSelectedDate - new Date() < 1000) {
            clearInterval(intervalId);
            dateInput.disabled = false;
        }
    }, 1000);
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
function addLeadingZero(value) {
    return value.toString().padStart(2, "0");
}

