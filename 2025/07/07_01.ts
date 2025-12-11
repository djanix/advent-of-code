import { readFileSync } from 'node:fs';

const data = readFileSync('input', 'utf8');
const lines = data.split('\n');

const startingLine = lines.shift();
const startingPosition = startingLine.indexOf('S');
const tachyons = new Set<number>();
tachyons.add(startingPosition);

let total = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  tachyons.forEach((tachyon, index) => {
    if (line[tachyon] === '^') {
      total++;

      tachyons.delete(tachyon);
      tachyons.add(tachyon - 1);
      tachyons.add(tachyon + 1);
    }
  });
}

console.log(total);
