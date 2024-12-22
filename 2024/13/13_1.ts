import { readFileSync } from 'node:fs';

const data = readFileSync('input', 'utf8').split('\n');
let total = 0;

for (let i = 0; i < data.length; i+=4) {
  const [buttonAx, buttonAy] = data[i].match(/\d+/g);
  const [buttonBx, buttonBy] = data[i + 1].match(/\d+/g);
  const [prizePositionX, prizePositionY] = data[i + 2].match(/\d+/g);

  let minTokens = 0;

  for (let x = 0; x <= Number(prizePositionX); x += Number(buttonAx)) {
    if ((Number(prizePositionX) - x) % Number(buttonBx) !== 0) continue;

    const aPress = x / Number(buttonAx);
    const bPress = (Number(prizePositionX) - x) / Number(buttonBx);

    if (aPress > 100 || bPress > 100) continue;

    if ((aPress * Number(buttonAy)) + (bPress * Number(buttonBy)) === Number(prizePositionY)) {
      const tokenCount = (aPress * 3) + bPress;
      if (!minTokens || tokenCount < minTokens) minTokens = tokenCount;
    }
  }

  total += minTokens;
}

console.log(total); // 34787