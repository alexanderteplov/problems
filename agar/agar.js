function whoCan(n, backteria) {
  if (n === 1) return [1];

  let sum = 0;
  const summs = backteria.map((item, index) => (sum += item));

  return backteria.map((item, index) => summs[index] > backteria[backteria.length - 1] && item > backteria[0] ? 1 : 0);
}

// input
const n = 4;
const input = [10, 10, 10, 11];

console.log("input: ", input);
console.log("output: ", whoCan(n, input));