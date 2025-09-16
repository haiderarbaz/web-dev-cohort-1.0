let myArray = [1, 4, 2, 3, 5, 6];
function sumfac(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}
/*
  Iteration

  sum = 0;
  sum = sum + numbers[i]

  first iteration
  sum = 0 + 1 (numbers[0])
  sum = 1
  second iteration
  sum = 1 + 4 (numbers[1])
  sum = 5
  third iteration
  sum = 5 + 2 (numbers[2])
  sum = 7;
  fourth iteration
  sum = 7 + 3 (numbers[3])
  sum = 10;
  fifth iteration
  sum = 10 + 5 (numbers[4])
  sum = 15;
  sixth iteration
  sum = 15 + 6 (numbers[5])
  sum = 21

*/
let sumOfArray = sumfac(myArray);
console.log(`Sum of Array is ${sumOfArray}`);

let result = sumfac([5, 3, 4, 6, 7]);
console.log(`My result is: ${result}`);
