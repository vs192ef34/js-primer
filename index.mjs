/* eslint-disable no-console */
/* eslint-disable import/extensions */

import {
  sayHi,
  getParamSum,
  setParam1,
  setParam2,
} from "./greetings/sayhi.mjs";

import { test } from "./greetings/test.mjs";

import greetFunction from "./greetings/greeter.mjs";

sayHi("JavaScript");

test();

setParam1(10);
setParam2(23);

console.log(getParamSum());
test();

greetFunction("Test");
