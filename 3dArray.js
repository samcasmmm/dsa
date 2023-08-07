const xSize = 3;
const ySize = 4;
const zSize = 5;

const threeDArray = new Array(xSize)
  .fill(null)
  .map(() => new Array(ySize).fill(null).map(() => new Array(zSize).fill(0)));

console.log(threeDArray);
