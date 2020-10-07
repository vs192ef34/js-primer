/* eslint-disable func-names */
/* eslint-disable no-console */

function max(a, b) {
  console.log(`max: a = ${a}, b = ${b}`);
  return a > b ? a : b;
}

function max4(a, b, c, d) {
  return max(max(a, b), max(c, d));
}

const min = function (a, b) {
  console.log(`min: a = ${a}, b = ${b}`);
  return a < b ? a : b;
};

const sum2 = (a, b) => {
  let r = 0;
  if (a > b) {
    r = a;
  } else {
    r = b;
  }
  return r;
};

const sum3 = (a, b, c) => a + b + c;

console.log(`Start`);

const pa = 45;
const pb = 67;

const r = max(pa, pb);

console.log(r);

if (pa === r) {
  console.log("pa is max");
}

if (pb === r) {
  console.log("pb is max");
}

// 34, 67, 45, 12

// const r4 = max(34, max(67, max(45, 12)));
// const r4 = max(max(34, 67), max(45, 12));

console.log(max4(34, 67, 45, 12));

const x = max;
const y = max;
const z = max4;

console.log(x, y, z);

console.log(min(37, 12));

const w = min;

console.log(min, w);

const v = sum2;

console.log(sum2, v);

console.log(sum3(10, 20, 30));
console.log(sum3);

console.log(`End`);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

console.log("Start 2");

// function minPredicate(a, b) {
//   return a < b;
// }

// function maxPredicate(a, b) {
//   return a > b;
// }

function matchPredicate(a, b, predicate) {
  return predicate(a, b) ? a : b;
}

// console.log(matchPredicate(12, 45, maxPredicate));

const rp = matchPredicate(12, 45, (a, b) => a <= b);

const max_p = (px, py) => matchPredicate(px, py, (a, b) => a > b);
const min_p = (px, py) => matchPredicate(px, py, (a, b) => a < b);

console.log(max_p(12, 34));
console.log(min_p(12, 34));

console.log("End 2");
