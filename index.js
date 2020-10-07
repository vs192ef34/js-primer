/* eslint-disable no-console */

// IIFE Immediately Invoked Function Expression

function add() {
  const a = 10;
  const b = 20;
  const answer = a + b;
  console.log(answer);
}

add();

const m = (function () {
  let a = 10;
  let b = 20;

  return {
    setA(val) {
      a = val;
    },

    setB(val) {
      b = val;
    },

    getAnswer() {
      return a + b;
    },
  };
})();

m.setA(50);
m.setB(120);

console.log(m.getAnswer());
console.log(typeof m);
