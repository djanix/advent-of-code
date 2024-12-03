import { readFileSync } from 'node:fs';

try {
  const data = readFileSync('input', 'utf8');
  const dataArr = data.split('\n');

  const safeReports = dataArr.reduce((count, row) => {
    const values = row.split(' ');
    const valuesDiff = [];

    values.forEach((value, index) => {
      if (index === values.length - 1) return;
      valuesDiff.push(Number(value) - Number(values[index + 1]));
    })

    if (!valuesDiff.length) return count;

    if (valuesDiff.every((value) => value < 0 && value > -4)) count++;
    if (valuesDiff.every((value) => value > 0 && value < 4)) count++;

    return count;
  }, 0);

  console.log(safeReports); // 326
} catch (err) {
  console.error(err);
}