const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  return (seconds) => {

let hours = Math.floor(seconds / 60 / 60);
let minutes = Math.floor(seconds / 60) - (hours * 60);
let second = seconds % 60;

const formatted = [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    second.toString().padStart(2, '0')
  ].join(':');
    timerEl.innerText = formatted
  };
};

const animateTimer = createTimerAnimator();
let intervalOne = 0

setInterval(() =>{
  animateTimer(intervalOne++)
}, 1000)

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  intervalOne = seconds
  animateTimer(seconds);

  inputEl.value = '';
});
