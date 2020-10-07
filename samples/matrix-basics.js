/* eslint-disable no-console */

const numbers = [];

let number = 3;

// for (let counter = 0; counter < 20; ) {
//   const matched = number % 3 === 0 || number % 5 === 0 || number % 15 === 0;

//   if (matched) {
//     counter += 1;
//     numbers.push(number);
//   }

//   number += 1;
// }

// let counter = 0;
// while (counter < 20) {
//   const matched = number % 3 === 0 || number % 5 === 0 || number % 15 === 0;

//   if (matched) {
//     counter += 1;
//     numbers.push(number);
//   }

//   number += 1;
// }

// const upperLimit = 320;
// for (let item = 3; item < upperLimit; item += 1) {
//   const matched = item % 3 === 0 || item % 5 === 0 || item % 15 === 0;
//   if (matched) {
//     numbers.push(item);
//     if (numbers.length >= 20) {
//       break;
//     }
//   }
// }

while (numbers.length < 20) {
  const matched = number % 3 === 0 || number % 5 === 0 || number % 15 === 0;
  if (matched) {
    numbers.push(number);
  }

  number += 1;
}

console.log(numbers);

let product = 1;
for (let index = 2; index < numbers.length; index += 3) {
  product *= numbers[index];
}

console.log(product);

let max = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (max < numbers[index]) {
    max = numbers[index];
  }
}

console.log(`max = ${max}`);

let min = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (min > numbers[index]) {
    min = numbers[index];
  }
}

console.log(`min = ${min}`);

const matrix = [];

for (let i = 1; i <= 9; i += 1) {
  const row = [];
  for (let j = 1; j <= 9; j += 1) {
    row.push(i * j);
  }
  matrix.push(row);
}

for (let i = 0; i < 9; i += 1) {
  let row = "";
  for (let j = 0; j < 9; j += 1) {
    row += `${matrix[i][j].toString()}\t`;
  }
  console.log(row);
}

// for (let i = 0; i < 9; i += 1) {
//   console.log(`i = ${i}`);
//   for (let j = 0; j < 9; j += 1) {
//     console.log(`matrix [${i}][${j}] = ${matrix[i][j]}`);
//   }
// }

let sum = 0;
for (let i = 0; i < 9; i += 1) {
  sum += matrix[i][i];
}

console.log(`sum = ${sum}`);

console.log("============================");

let mProduct = 1;
let mCount = 0;
for (let i = 0; i < 9; i += 1) {
  mProduct *= matrix[i][8 - i];
  mCount += 1;
}

console.log(
  `mProduct = ${mProduct}, mCount = ${mCount}, g.avg = ${mProduct / mCount}`
);

console.log("***********************************************");

const m = [];

for (let i = 0; i < 9; i += 1) {
  const row = [];
  for (let j = 0; j < 9; j += 1) {
    row.push(`${i}:${j}`);
  }
  m.push(row);
}

for (let i = 0; i < 9; i += 1) {
  let row = "";
  for (let j = 0; j < 9; j += 1) {
    row += `${m[i][j].toString()}\t`;
  }
  console.log(row);
}

console.log("============================");

for (let j = 2; j < 9; j += 2) {
  let column = "";
  for (let i = 0; i < 9; i += 1) {
    column += `${m[i][j].toString()}\t`;
  }
  console.log(column);
}

// ********************************************************************
console.log("***********************************************");

// перебор элементов матрицы по строкам

// перебираем строки и тогда i это номер строки
for (let i = 0; i < 9; i += 1) {
  // перебираем столбцы и тогда j это номер столбца
  for (let j = 0; j < 9; j += 1) {
    // индекс элемента это i, j
    const value = matrix[i][j];
  }
}

// перебор элементов матрицы по столбцам

// перебираем столбцы и тогда i это номер столбца
for (let i = 0; i < 9; i += 1) {
  // перебираем строки и тогда j это номер строки
  for (let j = 0; j < 9; j += 1) {
    // индекс элемента это j, i
    const value = matrix[j][i];
  }
}

const sums = [];
for (let i = 2; i < 9; i += 2) {
  let columnSum = 0;
  for (let j = 0; j < 9; j += 1) {
    columnSum += matrix[j][i];
  }
  sums.push(columnSum);
}

let total = 0;
for (let i = 0; i < sums.length; i += 1) {
  total += sums[i];
}

// преобразовавние одномерного массива в строку с разделителем между элементами
let seqText = "";
let separator = ", ";
for (let i = 0; i < sums.length; i += 1) {
  if (i === sums.length - 1) {
    separator = "";
  }
  seqText += `${sums[i].toString()}${separator}`;
}

console.log(
  `Среднее арифметическое последовательности: (${seqText}) равняется = ${
    total / sums.length
  }`
);

for (let i = 0; i < 9; i += 1) {
  let row = "";
  for (let j = 0; j < 9; j += 1) {
    row += `${matrix[i][j].toString()}\t`;
  }
  console.log(row);
}

console.log("==================================================");

for (let i = 0; i < 9; i += 1) {
  let row = "";
  for (let j = 0; j < 9 - i; j += 1) {
    row += `${matrix[i][j].toString()}\t`;
  }
  console.log(row);
}
