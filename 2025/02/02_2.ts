import { readFileSync } from 'node:fs';

const data = readFileSync('input', 'utf8');
const dataArr = data.split(',');

let answer = dataArr.reduce((total, value) => {
  const [start, end] = value.split('-').map(Number);

  for (let i = start; i <= end; i++) {
    const str = i.toString();
    const strLen = str.length;

    const divisors = [];
    for (let j = 1; j <= strLen / 2; j++) {
      if (strLen % j === 0) divisors.push(j);
    }

    const isInvalidId = divisors.some((divisor) => {
      const chunks = new Set();

      for (let j = 0; j < strLen; j+=divisor) {
        chunks.add(str.slice(j, j + divisor));
        if (chunks.size > 1) break;
      }

      return chunks.size === 1
    });

    if (isInvalidId) total += i;
  }

  return total;
}, 0);

console.log(answer);