// You just need to implement the distributeGifts function
function distributeGifts(totalGifts, friends) {
  // write your code here
  let giftGivens = 0; //Initializes giftGivens to 0, it keeps track of how many gifts have been given.

  // loop will run friends times (iterating from 0 to friends - 1).
  for (let i = 0; i < friends; i++) {
    // this if there are still gifts left to distribute.
    if (totalGifts > 0) {
      // If there are gifts available:
      // Increments giftGivens (counts a gift given).
      // Decrements totalGifts (reduces the number of remaining gifts).
      giftGivens++;
      totalGifts--;
    }
  }
  return giftGivens;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { totalGifts, friends } = JSON.parse(input); // Parse input as number
  // Call our function
  const result = distributeGifts(totalGifts, friends);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above

/*
Example 1:

console.log(distributeGifts(5, 3));
Execution Steps:

i = 0: totalGifts = 5 → 4, giftGivens = 1
i = 1: totalGifts = 4 → 3, giftGivens = 2
i = 2: totalGifts = 3 → 2, giftGivens = 3
Loop stops after 3 iterations.
Output: 3 (since we have enough gifts for all 3 friends).

Example 2: (More friends than gifts)

console.log(distributeGifts(2, 5));
Execution Steps:

i = 0: totalGifts = 2 → 1, giftGivens = 1
i = 1: totalGifts = 1 → 0, giftGivens = 2
i = 2: totalGifts = 0, so if (totalGifts > 0) fails → No more gifts given.
Loop continues but doesn't give more gifts.
Output: 2 (all available gifts are given, but we can't give gifts to 5 friends).
*/

/*

optimized way would be:
    
function distributeGifts(totalGifts, friends) {
  return Math.min(totalGifts, friends);
}
*/
