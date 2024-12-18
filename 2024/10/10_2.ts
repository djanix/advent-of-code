import { readFileSync } from 'node:fs';

const data = readFileSync('input', 'utf8');
const dataArr = data.split('\n');
const map =  dataArr.map((row) => row.split(''));

const results: {[key: string]: string[]} = {};
const xMax = map[0].length - 1;
const yMax = map.length - 1;

map.forEach((row, yPos) => {
  row.forEach((point, xPos) => {
    if (Number(point) !== 0) return;
    path(xPos + '-' + yPos, xPos, yPos, 0);
  });
});

function path(startPos: string, xPos: number, yPos: number, expectedValue: number): void {
  if (xPos > xMax || xPos < 0) return; // out of bound
  if (yPos > yMax || yPos < 0) return; // out of bound

  const value = Number(map[yPos][xPos]);
  if (value !== expectedValue) return;

  if (value === 9) {
    const currentPos = xPos + '-' + yPos;
    if (!results[startPos]) results[startPos] = [currentPos];
    else results[startPos].push(currentPos);
    return;
  }

  path(startPos, xPos, yPos + 1, value + 1);
  path(startPos, xPos, yPos - 1, value + 1);
  path(startPos, xPos + 1, yPos, value + 1);
  path(startPos, xPos - 1, yPos, value + 1);
}


const result = Object.values(results).reduce((total, value) => {
  return total + value.length;
}, 0);

console.log(result); // 1340