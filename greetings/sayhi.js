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

export const months = ["Dec", "Jan", "Feb"];

export const MODULE_VERSION = "1.0.125";

class DemoUser {
  constructor(fn, ln) {
    this.firstName = fn;
    this.lastName = ln;
  }

  print() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

export const du = new DemoUser("John", "Doe");
