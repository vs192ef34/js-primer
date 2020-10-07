/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */

let param1 = 0;
let param2 = 0;

console.log(`========> inside sayhi`);

export function sayHi(name) {
  console.log(`Hi, ${name}`);
}

export function getParamSum() {
  return param1 + param2;
}

export function setParam1(value) {
  param1 = value;
}

export function setParam2(value) {
  param2 = value;
}
