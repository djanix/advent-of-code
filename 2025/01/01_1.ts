import { readFileSync } from 'node:fs';

const data = readFileSync('input', 'utf8');
const dataArr = data.split('\n');

let answer = 0;

dataArr.reduce((dialPosition, value) => {
  const direction = value.slice(0,1) === 'L' ? -1 : 1;
  const move = Number(value.slice(1)) % 100;

  let newPosition = dialPosition + move * direction;
  if (newPosition < 0) newPosition = 100 + newPosition;
  else if (newPosition >= 100) newPosition = newPosition - 100;

  if (newPosition === 0) answer ++;
  return newPosition;
}, 50);

console.log(answer);