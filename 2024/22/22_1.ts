import { readFileSync } from 'node:fs';

const data = readFileSync('input', 'utf8').split('\n')
const pass = 2000;

const result = data.reduce((total, secret) => {
  let secretNumber = Number(secret);

  for (let i = 0; i < pass; i++) {
    secretNumber = mixAndPrune(secretNumber, secretNumber * 64);
    secretNumber = mixAndPrune(Math.floor(secretNumber / 32), secretNumber);
    secretNumber = mixAndPrune(secretNumber, secretNumber * 2048);
  }

  return total + secretNumber;
}, 0)

function mixAndPrune(num1: number, num2: number): number {
  return ((num1 ^ num2) >>> 0) % 16777216;
}

console.log(result); // 20071921341

