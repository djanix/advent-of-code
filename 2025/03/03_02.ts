import { readFileSync } from 'node:fs';

const data = readFileSync('input', 'utf8');
const dataArr = data.split('\n');

function additionNumbers(numArr: number[]): number {
  return Number(numArr.join(''));
}

const length = 12;

let answer = dataArr.reduce((total, row) => {
  let highestNumbers: { position: number; number: number }[] = [];

  let i = length;

  do {
    let highest = {
      position: 0,
      number: 0,
    };

    for (let j = row.length - i; j >= length - i; j--) {
      const number = Number(row[j]);
      if (highestNumbers.length && j < highestNumbers[highestNumbers.length - 1].position) continue;
      if (highestNumbers.find((x) => x.position === j)) continue;
      if (number >= highest.number) {
        highest = { position: j, number };
      }
    }

    highestNumbers.push(highest);

    i--;
  } while (i > 0);

  total += additionNumbers(highestNumbers.map((x) => x.number));

  return total;
}, 0);

console.log(answer);
