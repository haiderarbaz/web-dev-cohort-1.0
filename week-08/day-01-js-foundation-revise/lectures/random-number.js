function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;

  // Math.random() * (max - min + 1) + min this will make sure that the random number range from min to max

  // Math.random() always generate a number between 0(inclusive) and 1(exclusive)

  // When we multiply Math.random() * (max - min + 1) it gives a number between 0 to 6 and the minimum value remains 0 and here min is 1 and max is 6

  // The random number starts of 0 but here we need a minimum number start is 1

  // adding + min will shift the range start from min instead of 0

  // For example:

  // if Math.random() gives 0.00
  // (0.00 * (6-1+1)) +1
  // (0.00 * 6) + 1
  // 0 + 1
  // 1

  // if Math.random() gives 0.25
  // (0.25 * (6-1+1))+1
  // 1.50 + 1
  // 2.50
  // Math.floor(2.50) will be 2
}
const diceRoll = randomNumber(1, 6);
console.log(`Your dice roll is: ${diceRoll}`);
