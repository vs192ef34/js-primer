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

const generateMatrix = () => {
  const matrix = [];

  for (let i = 0; i < 9; i += 1) {
    const row = [];
    for (let j = 0; j < 9; j += 1) {
      row.push((i + 1) * (j + 1));
    }
    matrix.push(row);
  }
  return matrix;
};

const printMatrix = (matrix) => {
  for (let i = 0; i < 9; i += 1) {
    let row = "";
    for (let j = 0; j < 9; j += 1) {
      row += `${matrix[i][j].toString()}\t`;
    }
    console.log(row);
  }
};

const matrix = generateMatrix();

printMatrix(matrix);
