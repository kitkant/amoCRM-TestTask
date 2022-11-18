const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const timer = document.querySelector('.span');

// час , часа, часов
// минута, минуты, минут
// секунда, секунды, секунд

// 1, 21, 31, 41, 51 - минута
// 2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54 - минуты
// 0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 26, 27, 28, 29, 30, 35, 36, 37, 38, 39, 40, 45, 46, 47, 48, 49, 50, 55, 56, 57, 58, 59 - минут
let intervalTwo = 0

const store = {
    'hours': ['час', 'часа', 'часов'],
    'minutes': ['минута', 'минуты', 'минут'],
    'second': ['секунда', 'секунды', 'секунд'],
    '0': [1, 21, 31, 41, 51],
    '1': [2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54],
    '2': [0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 26, 27, 28, 29, 30, 35, 36, 37, 38, 39, 40, 45, 46, 47, 48, 49, 50, 55, 56, 57, 58, 59]
}

const objTime = {
    0: 'ноль',
    1: 'один',
    2: 'два',
    3: 'три',
    4: 'четыре',
    5: 'пять',
    6: 'шесть',
    7: 'семь',
    8: 'восемь',
    9: 'девять',
    10: 'десять',
    11: 'одиннадцать',
    12: 'двенадцать',
    13: 'тринадцать',
    14: 'четырнадцать',
    15: 'пятнадцать',
    16: 'шестнадцать',
    17: 'семнадцать',
    18: 'восемнадцать',
    19: 'девятнадцать',
    20: 'двадцать',
    21: 'двадцать один',
    22: 'двадцать два',
    23: 'двадцать три'
}

const createTimer = (seconds) => {
  let hours = Math.floor(seconds / 60 / 60);
  let minutes = Math.floor(seconds / 60) - (hours * 60);
  let second = seconds % 60;
  
  let hoursTimer = `${objTime[hours]} ${store[0].includes(Number(hours)) ? store['hours'][0]: store[1].includes(Number(hours)) ? store['hours'][1]: store[2].includes(Number(hours)) ? store['hours'][2]: 'error'}`
  let minutesTimer =`${minutes} ${store[0].includes(Number(minutes)) ? store['minutes'][0]: store[1].includes(Number(minutes)) ? store['minutes'][1]: store[2].includes(Number(minutes)) ? store['minutes'][2]: 'error'}`
  let secondTimer = `${second} ${store[0].includes(Number(second)) ? store['second'][0]: store[1].includes(Number(second)) ? store['second'][1]: store[2].includes(Number(second)) ? store['second'][2]: 'error'}`
  timer.innerText = hoursTimer + ', ' + minutesTimer + ', ' + secondTimer
    
}
setInterval(() =>{
  createTimer(intervalTwo++)
}, 1000)

btn.addEventListener('click', () => {
  const time = input.value.split(':')
  intervalTwo = Math.floor(Number(time[0]) * 60 * 60) + Math.floor(Number(time[1]) * 60) +  Number(time[2])
  
  input.value = '';
});
