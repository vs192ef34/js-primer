/* eslint-disable no-console */

const getDistance = (x1, y1, x2, y2) =>
  Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));

const showResult = (x1, y1, x2, y2, d) =>
  console.log(
    `Расстояние между точкой (${x1}, ${y1}) и точкой (${x2}, ${y2}) равняется ${d}`
  );

// =================================================================================

const px1 = 10;
const py1 = 10;

const px2 = 20;
const py2 = 10;

// ================================================================================

const d = getDistance(px1, py1, px2, py2);

showResult(px1, py1, px2, py2, d);

console.log(
  `**********************************************************************`
);

// const valueGeneratorMul = (i, j) => (i + 1) * (j + 1);
// const valueGeneratorSum = (i, j) => i + j;
// const valueGeneratorIdx = (i, j) => `${i}:${j}`;
// const valueGeneratorRnd = (i, j) =>
//   Math.floor(Math.random() * Math.floor(i * j));

const generateMatrix = (rows, cols, valueGenerator) => {
  const matrix = [];

  for (let i = 0; i < rows; i += 1) {
    const row = [];
    for (let j = 0; j < cols; j += 1) {
      row.push(valueGenerator(i, j));
    }
    matrix.push(row);
  }
  return matrix;
};

const tabFormatter = (value) => `${value.toString()}\t`;

const indicatorFormatter = (value) => {
  if (value <= 50) {
    return `-=${value.toString()}=-\t`;
  }

  return `+*${value.toString()}*+\t`;
};

const printMatrix = (matrix, formatter) => {
  for (let i = 0; i < matrix.length; i += 1) {
    let row = "";
    const rowLength = matrix[i].length;

    for (let j = 0; j < rowLength; j += 1) {
      row += formatter(matrix[i][j]);
    }

    console.log(row);
  }
};

const generators = [
  (i, j) => (i + 1) * (j + 1),
  (i, j) => i + j,
  (i, j) => `${i}:${j}`,
  (i, j) => Math.floor(Math.random() * Math.floor((i + 2) * (j + 2))),
];

const generatedMatrixes = [];

for (let i = 0; i < generators.length; i += 1) {
  generatedMatrixes.push(generateMatrix(5, 5, generators[i]));
}

for (let i = 0; i < generatedMatrixes.length; i += 1) {
  printMatrix(generatedMatrixes[i], tabFormatter);
  console.log(
    `====================================================================`
  );
}

// замыкание и пример возврата функции из другой функции
function outer(multiplier) {
  return (x) => x * multiplier;
}

const inner = outer(18);

console.log(inner(3));
console.log(inner(6));
console.log(inner(12));
console.log(inner(24));

console.log(outer(2)(5));

console.log("###############################################################");

// const m = generateMatrix(8, 8, (i, j) => (i % 2 === 0 ? (j + 1) % 2 : j % 2));

const m = generateMatrix(8, 8, generators[3]);
printMatrix(m, tabFormatter);

console.log("###############################################################");

let matrixMax = m[0][0];
const rowMax = [];
const colMax = [];

for (let i = 0; i < m.length; i += 1) {
  let max = m[i][0];
  for (let j = 0; j < m[i].length; j += 1) {
    matrixMax = m[i][j] > matrixMax ? m[i][j] : matrixMax;
    max = m[i][j] > max ? m[i][j] : max;
  }
  rowMax.push(max);
}

for (let i = 0; i < m.length; i += 1) {
  let max = m[i][0];
  for (let j = 0; j < m[i].length; j += 1) {
    max = m[j][i] > max ? m[j][i] : max;
  }
  colMax.push(max);
}

console.log(`Максимальный элемент матрицы: ${matrixMax}`);
console.log(`Максимумы строк: ${rowMax}`);
console.log(`Максимумы столбцов: ${colMax}`);

console.log("###############################################################");

const limit = 10000;
let rowNumber = 0;
let extraLimitCount = 0;

for (let i = 0; i < m.length; i += 1) {
  let count = 0;
  for (let j = 0; j < m[i].length; j += 1) {
    if (m[i][j] > limit) {
      count += 1;
    }
  }
  if (count > extraLimitCount) {
    extraLimitCount = count;
    rowNumber = i;
  }
}

if (extraLimitCount === 0) {
  console.log(`В матрице нет элементов больше чем ${limit}`);
} else {
  console.log(`Номер строки: ${rowNumber}`);
}

console.log("###############################################################");

const matrixStats = (matrix) => {
  let sum = 0;
  let count = 0;
  let max = matrix[0][0];
  let min = matrix[0][0];

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      const isBlack = i % 2 === 0 ? j % 2 !== 0 : j % 2 === 0;

      if (isBlack) {
        matrix[i][j] = 0;
      } else {
        sum += matrix[i][j];
        count += 1;
        max = matrix[i][j] > max ? matrix[i][j] : max;
        min = matrix[i][j] < min ? matrix[i][j] : min;
      }
    }
  }

  return [sum / count, max, min];
};

const result = matrixStats(m);

printMatrix(m, tabFormatter);

console.log(
  `Среднее арифметическое: ${result[0]}; максимальная белая клетка: ${result[1]}, минимальная белая клетка: ${result[2]}`
);
