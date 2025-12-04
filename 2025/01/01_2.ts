import { readFileSync } from 'node:fs';

const data = readFileSync('input', 'utf8');
const dataArr = data.split('\n');

let answer = 0;

dataArr.reduce((dialPosition, value) => {
  const direction = value.slice(0,1) === 'L' ? -1 : 1;
  const rawMove = Number(value.slice(1))

  let ticks =  Math.floor(rawMove / 100);

  const move = rawMove % 100;
  let newPosition = dialPosition + move * direction;

  if (newPosition === 0) {
    ticks++;
  } else if (newPosition < 0) {
    if (dialPosition !== 0) ticks++;
    newPosition = 100 + newPosition;
  } else if (newPosition > 99) {
    ticks++;
    newPosition = newPosition - 100;
  }

  answer += ticks;

  return newPosition;
}, 50);

console.log(answer);