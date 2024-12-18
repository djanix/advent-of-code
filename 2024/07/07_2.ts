import { readFileSync } from 'node:fs';

const data = readFileSync('input', 'utf8');
const dataArr = data.split('\n');

const answer = dataArr.reduce((total, line) => {
  const [result, numbers] = line.split(':');
  const numbersArr = numbers.split(' ');
  numbersArr.shift();

  const isValid = calculate(0, 0, numbersArr, Number(result));

  if (isValid) total += Number(result);
  return total;
}, 0);

function calculate(total: number, index: number, numberList: string[], result: number): boolean {
  if (!index) return calculate(Number(numberList[0]), index + 1, numberList, result);

  const totalAddition = total + Number(numberList[index]);
  const totalMultiply = total * Number(numberList[index]);
  const totalConcat = Number('' + total + numberList[index]);

  if (index === numberList.length - 1) {
    return totalAddition === result || totalMultiply === result || totalConcat === result;
  }

  return (
    calculate(totalAddition, index + 1, numberList, result) ||
    calculate(totalMultiply, index + 1, numberList, result) ||
    calculate(totalConcat, index + 1, numberList, result)
  );
}

console.log(answer); // 223472064194845