import { readFileSync } from 'node:fs';

try {
  const data = readFileSync('input', 'utf8');
  const regex = /mul\(((?:[0-9]+,{1}?)+[0-9]+)\)/gm

  const instructions = data.matchAll(regex);
  let total = 0;

  for (const instruction of instructions) {
    const numbers = instruction[1].split(',');
    total += (Number(numbers[0]) * Number(numbers[1]));
  }

  console.log(total); // 174103751
} catch (err) {
  console.error(err);
}