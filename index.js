/* eslint-disable no-console */

const a = [];

for (let i = 1; i <= 10; i += 1) {
  a.push(i);
}

for (let i = 0; i < a.length; i += 1) {
  console.log(`a[${i}] = ${a[i]}`);
}

const b = [];

for (let i = 0; i < 10; i += 1) {
  b[i] = (i + 1) ** 2;
}

for (let i = 0; i < b.length; i += 1) {
  console.log(`b[${i}] = ${b[i]}`);
}

// c = a + b => c[i] = a[i] + b[i]

const c = [];

for (let i = 0; i < b.length; i += 1) {
  c.push(a[i] + b[i]);
}

for (let i = 0; i < c.length; i += 1) {
  console.log(`c[${i}] = ${c[i]}`);
}

let sum = 0;
let count = 0;

for (let i = 0; i < c.length; i += 1) {
  if (c[i] % 10 === 0) {
    sum += c[i];
    count += 1;
  }
}

let avarage = sum / count;
console.log(sum, count, avarage);

sum = 0;
count = 0;

for (let i = 0; i < c.length; i += 1) {
  if (i % 2 !== 0) {
    sum += c[i];
    count += 1;

    console.log(`c[${i}] = ${c[i]}, sum = ${sum}, count = ${count}`);
  }
}

avarage = sum / count;
console.log(sum, count, avarage);
