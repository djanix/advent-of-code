import { readFileSync } from 'node:fs';

const data = readFileSync('input', 'utf8').split('\n');
let total = 0;

for (let i = 0; i < data.length; i+=4) {
  const [ax, ay] = data[i].match(/\d+/g);
  const [buttonAx, buttonAy] = [ax, ay].map(Number);

  const [bx, by] = data[i + 1].match(/\d+/g);
  const [buttonBx, buttonBy] = [bx, by].map(Number);

  const [px, py] = data[i + 2].match(/\d+/g);
  const [prizePositionX, prizePositionY] = [px, py].map(Number);

  let minTokens = 0;

  for (let x = 0; x <= prizePositionX; x += buttonAx) {
    if ((prizePositionX - x) % buttonBx !== 0) continue;

    const aPress = x / buttonAx;
    const bPress = (prizePositionX - x) / buttonBx;

    if (aPress > 100 || bPress > 100) continue;

    if ((aPress * buttonAy) + (bPress * buttonBy) === prizePositionY) {
      const tokenCount = (aPress * 3) + bPress;
      if (!minTokens || tokenCount < minTokens) minTokens = tokenCount;
    }
  }

  total += minTokens;
}

console.log(total); // 34787