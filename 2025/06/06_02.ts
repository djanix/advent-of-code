import { readFileSync } from 'node:fs';

const data = readFileSync('input', 'utf8');
const lines = data.split('\n').map((x) => x.split('').reverse());
const problems: { numbers: number[]; operator: string }[] = [];

let numbers = [];

lines[0].forEach((line, index) => {
  let numberStr = '';
  for (let i = 0; i < lines.length; i++) {
    if (lines[i][index] === '+' || lines[i][index] === '*') {
      numbers.push(numberStr);

      problems.push({
        numbers: numbers.map(Number),
        operator: lines[i][index],
      });

      numbers = [];
      numberStr = '';
    } else if (lines[i][index] !== ' ') {
      numberStr += lines[i][index];
    }
  }

  if (numberStr !== '') {
    numbers.push(numberStr);
  }
});

const total = problems.reduce((total, problem) => {
  if (problem.operator === '+') {
    return total + problem.numbers.reduce((total, num) => total + num, 0);
  } else {
    return total + problem.numbers.reduce((total, num) => total * num, 1);
  }
}, 0);

console.log(total);
