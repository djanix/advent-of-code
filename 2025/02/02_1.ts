import { readFileSync } from 'node:fs';

const data = readFileSync('input', 'utf8');
const dataArr = data.split(',');

let answer = dataArr.reduce((total, value) => {
  const [start, end] = value.split('-').map(Number);

  if (
    start.toString().length % 2 === 1 &&
    end.toString().length % 2 === 1
  ) return total;

  for (let i = start; i <= end; i++) {
    const string = i.toString();

    if (string.length % 2 === 1) continue;

    const first = string.slice(0, string.length / 2);
    const second = string.slice(string.length / 2);

    if (first === second) total+=i;
  }

  return total;
}, 0);

console.log(answer);