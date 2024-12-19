import { readFileSync } from 'node:fs';

let stones = readFileSync('input', 'utf8').split(' ').map(x => Number(x));
const blinking = 25;

for (let i = 0; i < blinking; i++) {
  stones = stones.reduce((newStones, stone) => {
    if (stone === 0) {
      newStones.push(1);
    } else if (stone.toString().length % 2 === 0) {
      const length = stone.toString().length / 2;
      const newStone1 = Number(stone.toString().substring(0, length));
      const newStone2 = Number(stone.toString().substring(length));
      newStones.push(newStone1);
      newStones.push(newStone2);
    } else {
      newStones.push(stone * 2024);
    }

    return newStones;
  }, []);
}

console.log(stones.length); // 233050
