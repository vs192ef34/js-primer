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

const generators = [
  (i, j) => (i + 1) * (j + 1),
  (i, j) => i + j,
  (i, j) => `${i}:${j}`,
  (i, j) => Math.floor(Math.random() * Math.floor(i * j)),
];

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

// const m = generateMatrix(16, 12, valueGeneratorRnd);
// printMatrix(m, indicatorFormatter);

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
