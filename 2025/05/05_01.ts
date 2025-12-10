import { readFileSync } from 'node:fs';

const data = readFileSync('input', 'utf8');
const dataArr = data.split('\n');

const ranges: [number, number][] = [];
const ingredients: number[] = [];

dataArr.forEach((arr) => {
  if (arr.includes('-')) {
    const [start, end] = arr.split('-').map(Number);
    ranges.push([start, end]);
  } else if (arr != '') {
    ingredients.push(Number(arr));
  }
});

let total = 0;

for (let i = 0; i < ingredients.length; i++) {
  for (let j = 0; j < ranges.length; j++) {
    if (ingredients[i] >= ranges[j][0] && ingredients[i] <= ranges[j][1]) {
      total++;
      break;
    }
  }
}

console.log(total);
