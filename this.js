/* eslint-disable no-console */

// scope - область видимости
// scope chain - цепочка областей видимости

// global scope

const g = "global";

function globalFunction() {
  // local scope

  console.log(g);

  // local function
  function innerFunction() {
    // nested local scope
    console.log(`from inner funciton ${g}`);
  }

  if (true) {
    // block scope
    // block variable
    const b = "local";

    // use global variable
    console.log(`global var ${g}`);

    // call local funciton
    innerFunction();
  }

  // use inner block variable
  // console.log(b);

  // call local function
  innerFunction();
}

globalFunction();

if (true) {
  // block scope

  const b = "block";

  // use block var from block
  console.log(`use block variable ${b}`);
}

// call local function
// innerFunction();

// use block var from outer scope
// console.log(`use block variable ${b}`);

console.log("=====================================================");

// context - контекст
// context - value of "this"

// "just" this
console.log(this);

// global this variable
console.log(globalThis);

// this points to globalThis
function testThis01() {
  console.log(this);
}

// this points to globalThis
function outerThisCaller() {
  testThis01();
}

testThis01();

outerThisCaller();

const a = {
  f1: "a local field",

  testThis() {
    console.log(this);
    console.log(this.f1);
  },
};

a.testThis();

const t = a.testThis;

t();

const b = {
  f1: "b local field",
};

console.log(b);

b.testThisInB = a.testThis;

console.log(b);

b.testThisInB();

function objectThisTester() {
  console.log(this);
  console.log(this.f1);
}

a.testThis1 = objectThisTester;

a.testThis();
a.testThis1();

b.testThis2 = objectThisTester;

b.testThis2();

objectThisTester();

globalThis.f1 = "globalThis local field";

objectThisTester();

// global execution context
// global variable environment

// local execution context
// local variable environment

// call stack - стэк вызовов
// call site - место вызова
// stack LIFO Last Input First Output
// queue FIFO First Input First Output

console.log("======================================================");

// standalone funciton
// default binding

const n = 10;

console.log(this);

function luckyNumber() {
  console.log(this);
  console.log(this.n + 2);
}

luckyNumber();

// implicit binding

function getAmount() {
  console.log(this.amount);
}

const obj = {
  amount: 14,
};

obj.getAmountValue = getAmount;

obj.getAmountValue();

// explicit binding

getAmount.call(obj);

const objects = [
  { amount: 21 },
  { amount: 22 },
  { amount: 23 },
  { amount: 24 },
  { amount: 25 },
  { amount: 26 },
  { amount: 27 },
  { amount: 28 },
  { amount: 29 },
  { amount: 30 },
];

function getAmountFee(percent, threshold) {
  return this.amount <= threshold ? 0 : this.amount * percent;
}

objects
  .map((o) => getAmountFee.call(o, 0.1, 24))
  .forEach((fee) => console.log(fee));

objects
  .map((o) => getAmountFee.apply(o, [0.1, 24]))
  .forEach((fee) => console.log(fee));

console.log("========================================================");

// bind -> hard binding
const f = getAmountFee(0.1, 24);
console.log(f);

const order = {
  amount: 34,
  getAmountFee(percent, threshold) {
    console.log(this);
    return this.amount <= threshold ? 0 : this.amount * percent;
  },
};

const fee = order.getAmountFee(0.1, 24);
console.log(fee);

function eventProcessor(callback) {
  const r = callback();
  console.log(`inside processor: ${r}`);
}

const handler = order.getAmountFee.bind(order, 0.25, 10);
eventProcessor(handler);

console.log("=============================================");

// hard binding

const userFunction = function () {
  getAmount.call(obj);
};

userFunction();
userFunction.call(45);

console.log("===========================================");

// arrow functions

const box = {
  amount: 34,
  m() {
    console.log(this.amount);
  },
};

box.m1 = () => {
  console.log(this.amount);
};

box.m2 = function () {
  console.log(this.amount);
};

box.m();
box.m1();
box.m2();

function processorFunciton(callback) {
  callback();
}

processorFunciton(box.m);

processorFunciton(() => {
  box.m();
});

processorFunciton(box.m.bind(box));

console.log("==================================================");

// fucntion arguments

function testFunction() {
  for (let i = 0; i < arguments.length; i += 1) {
    console.log(`agrument[${i}] = ${arguments[i]}`);
  }
}

testFunction(1, 2, 3, "test", [1, 2], { f: 34, m: 45 });
