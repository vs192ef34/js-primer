/* eslint-disable no-console */

// hash, object

// object === hash
// object === class instance

const point = {
  x: 123,
  y: 451,
  child: {
    attrA: "value 1",
    attrB: "value 2",
    subObject: {
      field: "yet another value",
    },
  },
};

point.child.field = 50;
point.child.subObject.innerObject = {
  internalArray: [1, { x: 23, y: 45 }],
};

console.log(point.child.subObject.innerObject);

const point1 = {
  x: 10,
  y: 10,
};

const point2 = {
  x: 10,
  y: 10,
};

const point3 = point1;
const point4 = point1;
const point5 = point1;

console.log("=== ", point1 === point3);

console.log("p1 ", point1);
console.log("p3 ", point3);

point3.x = 50;

console.log("p1 ", point1);
console.log("p3 ", point3);
console.log("p4 ", point4);
console.log("p5 ", point5);

const demo = (n, o) => {
  n = 345;
  o.x = 400;

  console.log("inside function", n, o);
};

const p = {
  x: 10,
  y: 10,
};

let m = 11;

console.log(m, p);

demo(m, p);

console.log(m, p);
