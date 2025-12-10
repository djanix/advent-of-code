import { readFileSync } from 'node:fs';

const data = readFileSync('input', 'utf8');
const dataArr = data.split('\n');

const ranges: [number, number][] = [];

dataArr.forEach((arr) => {
  if (arr.includes('-')) {
    const [start, end] = arr.split('-').map(Number);
    ranges.push([start, end]);
  }
});

ranges.sort((a, b) => a[0] - b[0]);

for (let i = 0; i < ranges.length; i++) {
  for (let j = i + 1; j < ranges.length; j++) {
    if (ranges[i][1] >= ranges[j][0]) {
      ranges[i][1] = Math.max(ranges[i][1], ranges[j][1]);
      ranges.splice(j, 1);
      j--;
    }
  }
}

let total = ranges.reduce((total, range) => {
  return total + range[1] - range[0] + 1;
}, 0);

console.log(total);
