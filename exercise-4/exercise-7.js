function sumUntil(maxValue) {
  let maxSum = maxValue;
  for (let i = 0; i < maxValue; i++) {
    maxSum += i;
  }
  return maxSum;
}

console.log(sumUntil(5));


