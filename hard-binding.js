/* eslint-disable no-console */

const a = {
  field: "field from a",
};

const b = {
  field: "field from b",
};

function printField1() {
  console.log(this);
  console.log(`=> ${this.field}`);
}

function printField2() {
  console.log(this);
  console.log(`#> ${this.field}`);
}

function setPrinter(obj, printerFunction) {
  const objWithPrinter = obj;
  objWithPrinter.printer = printerFunction;
  return objWithPrinter;
}

console.log("implicit");

a.printer = printField1;
b.printer = printField1;

a.printer();
b.printer();

console.log("hard");

const bindToAPrintField = printField1.bind(a);

a.printer = bindToAPrintField;
b.printer = bindToAPrintField;

a.printer();
b.printer();

console.log(`Example with funciton`);

const c = {
  field: "field from c",
};

const d = {
  field: "field from d",
};

const objWithPrinter1 = setPrinter(c, printField1.bind(d));

objWithPrinter1.printer();

const objWithPrinter2 = setPrinter(d, printField2.bind(c));

objWithPrinter2.printer();
