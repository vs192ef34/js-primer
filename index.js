/* eslint-disable no-console */

const dayNumber = 78;
let dayName = "не определено";

switch (dayNumber) {
  case 1:
    dayName = "понедельник";
    break;
  case 2:
    dayName = "вторник";
    break;
  case 3:
    dayName = "среда";
    break;
  case 4:
    dayName = "четверг";
    break;
  case 5:
    dayName = "пятница";
    break;
  case 6:
    dayName = "суббота";
    break;
  case 7:
    dayName = "воскресенье";
    break;
  default:
    break;
}

let dayType = "не определено";

switch (dayNumber) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    dayType = "рабочий";
    break;
  case 6:
  case 7:
    dayType = "выходной";
    break;
  default:
    break;
}

console.log(dayName);
console.log(dayType);
