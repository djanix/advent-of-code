import { readFileSync } from 'node:fs';

const data = readFileSync('input', 'utf8');
const lines = data.split('\n');
const problems: { numbers: number[]; operator: string }[] = [];

lines.forEach((line, index) => {
  if (index === 0) {
    const items = line
      .split(' ')
      .filter((x) => x !== '')
      .map(Number);

    for (let i = 0; i < items.length; i++) {
      problems.push({
        numbers: [items[i]],
        operator: '+',
      });
    }
  } else if (index === lines.length - 1) {
    const items = line.split(' ').filter((x) => x !== '');

    for (let i = 0; i < items.length; i++) {
      problems[i].operator = items[i];
    }
  } else {
    const items = line
      .split(' ')
      .filter((x) => x !== '')
      .map(Number);

    for (let i = 0; i < items.length; i++) {
      problems[i].numbers.push(items[i]);
    }
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
