/* eslint-disable prefer-rest-params */
/* eslint-disable no-console */

const sum = (x, y, z) => x + y + z;

const numbers = [1, 2, 3];

console.log(sum(numbers[0], numbers[1], numbers[2]));

// eslint-disable-next-line prefer-spread
console.log(sum.apply(null, numbers));

console.log(sum(...numbers));

function dumpArguments() {
  console.log(arguments);
}

dumpArguments(...numbers);

function demoFunction1(a, b, c, d, e) {
  console.log(arguments);
}

const args = [0, 1];

demoFunction1(-1, ...args, 2, ...[3]);

const dateFields = [2020, 9, 2];
const today = new Date(...dateFields);

console.log(today);

const arr = [1, 2, 3, 4];
const arr1 = [...arr];
arr1.push(5);

console.log(arr);
console.log(arr1);

const arr2 = [...arr, ...arr1];
console.log(arr2);

const arr3 = [...arr2, ...arr, ...arr1];
console.log(arr3);

const arr4 = [23, 45, ...arr, 67];
console.log(arr4);

const carr01 = [..."test"];
console.log(carr01);

const obj1 = { x: 12, y: 45 };
const obj2 = { x: 67, y: 34 };

const clonedObj = { ...obj1 };

clonedObj.y = 90;

console.log(obj1);
console.log(clonedObj);

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

const obj3 = { a: 123, b: 456 };
const mergedObj1 = { ...obj1, ...obj3 };
console.log(mergedObj1);

const modifiedObject = { ...mergedObj1, y: 100, b: 789 };
console.log(modifiedObject);

const modifiedObject1 = { y: 100, b: 789, ...mergedObj1 };
console.log(modifiedObject1);

const modifiedObject2 = { ...mergedObj1, y: 100, b: 789, c: 67 };
console.log(modifiedObject2);

function sumAll(...params) {
  // return arguments.reduce((previous, current) => previous + current, 0);
  return params.reduce((previous, current) => previous + current, 0);
  // return params.filter((p) => p % 2);
}

console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(1, 2, 3, 4, 5, 56, 67));
console.log(sumAll(...[1, 2, 3, 4, 5]));

function restParams1(a, b, ...params) {
  console.log(a);
  console.log(b);
  console.log(params);
}

restParams1(10, 20, 23, 34, 56, 67, 78, 89);

// destructuring assignement

console.log("===================================================");

const vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [a, b, ...restVector] = vector;

console.log(a, b, restVector);

const [c = 0, d = 0] = [];
console.log(c, d);

const [e = 0, f = e, g = e] = [22, 33, 44, 55, 66];
console.log(e, f, g);

const [h, , , i] = [1, 2, 3, 4];
console.log(h, i);

let [j, k] = [11, 22];
[j, k] = [k, j];
console.log(j, k);

const [x1, [x2, x3]] = [1, [2, 3]];
console.log(x1, x2, x3);

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 27,
};

const {
  firstName: fn = "noname",
  lastName: ln = "nolastname",
  age: personAge = 0,
} = person;
console.log(fn, ln, personAge);

const {
  firstName: fn1 = "noname",
  lastName: ln1 = "nolastname",
  age: personAge1 = 0,
} = {};
console.log(fn1, ln1, personAge1);

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 27,
  place: {
    country: "Germany",
    city: "Berlin",
  },
};

const {
  firstName,
  lastName,
  age,
  place: { country: personCountry, city: personCity },
} = person1;

console.log(personCountry, personCity);

console.log("==========================================================");

const cars = ["BMW", "Mercedes", "Audi", "Honda", "Renault", "Mazda"];

const { length, 0: first, [length - 1]: last } = cars;
console.log(first, last);

const { 3: middle } = cars;
console.log(middle);

const { 1: theFirst, length: carsln } = cars;
console.log(theFirst, carsln);
