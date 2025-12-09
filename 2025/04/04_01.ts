import { readFileSync } from 'node:fs';

const data = readFileSync('input', 'utf8');
const dataArr = data.split('\n').map((x) => x.split(''));

const paperRoll = '@';
const empty = '.';
const threshold = 4;

let total = 0;

for (let i = 0; i < dataArr.length; i++) {
  for (let j = 0; j < dataArr[i].length; j++) {
    if (dataArr[i][j] === empty) continue;

    let adjacentValues = [
      dataArr[i - 1]?.[j - 1],
      dataArr[i - 1]?.[j],
      dataArr[i - 1]?.[j + 1],
      dataArr[i + 1]?.[j - 1],
      dataArr[i + 1]?.[j],
      dataArr[i + 1]?.[j + 1],
      dataArr[i][j - 1],
      dataArr[i][j + 1],
    ];

    const paperRollCount = adjacentValues.filter((x) => x === paperRoll).length;

    if (paperRollCount < threshold) total++;
  }
}

console.log(total);
