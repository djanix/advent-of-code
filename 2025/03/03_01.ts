import { readFileSync } from 'node:fs';

const data = readFileSync('input', 'utf8');
const dataArr = data.split('\n');

function additionNumbers(num1: number, num2: number): number {
  return Number(num1.toString() + num2.toString());
}

let answer = dataArr.reduce((total, row) => {
  let highestNumbers = [
    { position: 0, number: Number(row[0]) },
    { position: 1, number: Number(row[1]) },
  ];

  for (let i = 2; i < row.length; i++) {
    const num = Number(row[i]);
    const currentTotal = additionNumbers(highestNumbers[0].number, highestNumbers[1].number);
    const currentHighest = highestNumbers[0].number > highestNumbers[1].number ? highestNumbers[0] : highestNumbers[1];
    const newTotal = additionNumbers(currentHighest.number, num);

    if (newTotal > currentTotal) {
      highestNumbers = [currentHighest, { position: i, number: num }];
    }
  }

  total += additionNumbers(highestNumbers[0].number, highestNumbers[1].number);

  return total;
}, 0);

console.log(answer);
