/* eslint-disable no-console */

const a = [1, 2, 3, 5, 6, 7, 8, 9, 10];

const b = a.map((i) => i * i);

console.log(b);

const myMap = (arr, transform) => {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result.push(transform(arr[i]));
  }
  return result;
};

const myForEach = (arr, action) => {
  for (let i = 0; i < arr.length; i += 1) {
    action(arr[i]);
  }
};

const c = myMap(a, (i) => i * i);

console.log(c);

myForEach(c, (i) => console.log(i));

const r = a.map((item, index, arr) => {
  const left = index === 0 ? 0 : arr[index - 1];
  const right = index === arr.length - 1 ? 0 : arr[index + 1];

  return (left + item + right) / 3;
});

console.log(r);

const n = a.filter((i) => i % 2 === 0);

console.log(n);

const r1 = a.find((i) => i % 2 === 0);

console.log(r1);

const r2 = a.findIndex((i) => i % 2 === 0);

console.log(r2);

const r3 = a.some((i) => i % 27 === 0);

console.log(r3);

const r4 = a.every((i) => i % 27 !== 0);

console.log(r4);
