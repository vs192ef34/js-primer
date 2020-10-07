/* eslint-disable no-console */

// function declaration

function sayHello(toWho) {
  console.log(`Hello, ${toWho}`);
}

sayHello("world");

console.log(sayHello.length);
console.log(sayHello.name);

// function expression

const displayGreeting = function (toWho) {
  console.log(`Hi, ${toWho}`);
};

displayGreeting("JavaScript");

console.log(displayGreeting.length);
console.log(displayGreeting.name);

const f001 = displayGreeting;
console.log(f001.name);

function rec(flag) {
  if (flag) {
    console.log(`Inside rec`);
    rec(false);
  }

  console.log(`End of rec`);
}

rec(true);

// NFE - named function expression

const rec1 = function func(flag) {
  if (flag) {
    console.log(`Inside rec`);
    func(false);
  }

  console.log(`End of rec`);
};

rec1(true);
