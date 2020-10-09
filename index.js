/* eslint-disable no-console */
/* eslint-disable import/extensions */

import leftPad from "left-pad";

// import {
//   sayHi,
//   getParamSum,
//   setParam1,
//   setParam2,
//   months,
//   MODULE_VERSION,
//   du,
// } from "./greetings/sayhi.js";

import * as greetings from "./greetings/sayhi.js";

import { test1 as tst1, test2 as tst2 } from "./greetings/test.js";
import greetFunction from "./greetings/greeter.js";

greetings.sayHi("JavaScript");

tst1();

greetings.setParam1(10);
greetings.setParam2(23);

console.log(greetings.getParamSum());
tst2();

greetFunction("Test");

console.log(leftPad("test", 15, ">"));

console.log(greetings.months);

console.log(greetings.MODULE_VERSION);

console.log(typeof greetings.du);
greetings.du.print();
