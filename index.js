/* eslint-disable no-console */

for (let i = 1; i <= 10; i += 1) {
  if (i % 2 !== 0) {
    const sq = i * i;
    console.log(`i = ${i}; sq = ${sq}`);
  }
}

let i = 90;
while (i <= 10) {
  console.log(`while ${i}`);
  i += 1;
}

i = 90;
do {
  console.log(`do-while ${i}`);
  i += 1;
} while (i <= 10);

const askUser = () => 23;

console.log("Пожалуйста введите корректный возраст");
let ages = askUser();
while (ages < 18) {
  console.log("Пожалуйста введите корректный возраст");
  ages = askUser();
}

ages = 0;
do {
  console.log("Пожалуйста введите корректный возраст");
  ages = askUser();
} while (ages < 18);
