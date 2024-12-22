import { readFileSync } from 'node:fs';

const xBound = 101;
const yBound = 103;

let data = readFileSync('input', 'utf8')
  .split('\n')
  .map(str => {
    let [px, py, vx, vy] = str.match(/-?\d+/g);

    return {
      posX: Number(px),
      posY: Number(py),
      velX: Number(vx),
      velY: Number(vy),
    };
  });

for (let i = 0; i < 100; i++) {
  data = data.map((robot) => {
    robot.posX = robot.posX + robot.velX;
    robot.posY = robot.posY + robot.velY;

    if (robot.posX >= xBound) robot.posX = robot.posX - xBound;
    if (robot.posY >= yBound) robot.posY = robot.posY - yBound;

    if (robot.posX < 0) robot.posX = xBound + robot.posX;
    if (robot.posY < 0) robot.posY = yBound + robot.posY;

    return robot;
  });
}

const quadrants = data.reduce((acc, robot) => {
  if (robot.posX < Math.floor(xBound / 2) && robot.posY < Math.floor(yBound / 2)) {
    acc[0] += 1;
  } else if (robot.posX >= Math.ceil(xBound / 2) && robot.posY < Math.floor(yBound / 2)) {
    acc[1] += 1;
  } else if (robot.posX < Math.floor(xBound / 2) && robot.posY >= Math.ceil(yBound / 2)) {
    acc[2] += 1;
  } else if (robot.posX >= Math.ceil(xBound / 2) && robot.posY >= Math.ceil(yBound / 2)) {
    acc[3] += 1;
  }
  return acc;
}, [0,0,0,0]);

console.log(quadrants[0] * quadrants[1] * quadrants[2] * quadrants[3]); // 224438715