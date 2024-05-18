// arrayManipulation.js

function processArray(numbers) {
  const result = numbers.map((num) => {
    if (num % 2 === 0) {
      // Even number: square it
      return num * num;
    } else {
      // Odd number: triple it
      return num * 3;
    }
  });

  return result;
}

// Example usage:
const inputNumbers = [2, 4, 6, 7, 8];
const processedNumbers = processArray(inputNumbers);
console.log(processedNumbers);
