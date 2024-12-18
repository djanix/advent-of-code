import { readFileSync } from 'node:fs';

const data = readFileSync('input', 'utf8'); // example: '2333133121414131402'
const dataArr = data.split('');

let blocks = [];
let increment = 0;

dataArr.forEach((item, index) => {
  let value = null;
  if (index % 2 === 0) {
    value = Number(increment);
    increment++;
  }
  const arr = new Array(Number(item)).fill(value);
  blocks = blocks.concat(...arr);
});

blocks.forEach((item, index) => {
  if (item !== null) return;
  let lastElement = null;
  while (lastElement === null) {
    lastElement = blocks.pop();
  }
  blocks[index] = lastElement;
});

const checksum = blocks.reduce((total, number, index) => {
  return (number * index) + total;
}, 0);

console.log(checksum); // 6378826667552