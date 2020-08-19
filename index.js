/* eslint-disable no-console */

const a = 1;
const b = 13;
const c = 14;

const check1 = a + b > c;
const check2 = b + c > a;
const check3 = c + a > b;

const answer = check1 && check2 && check3;

const action = answer ? "можно" : "нельзя";

console.log(
  `На сторонах с длинами (${a}, ${b}, ${c}) ${action} построить треугольник.`
);
