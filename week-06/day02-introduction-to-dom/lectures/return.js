// The return value can be:

// 1. Captured in a Variable:
// The return value is stored in a variable for later use.
function add(a, b) {
  return a + b;
}

let result = add(2, 3); // Captured in a variable
console.log(result); // Output: 5

// 2. Passed to Another Function:
// The return value is immediately passed as an argument to another function.
function multiply(x, y) {
  return x * y;
}

function double(num) {
  return num * 2;
}

let finalResult = double(multiply(2, 3)); // Passed to another function
console.log(finalResult); // Output: 12

// 3. Discarded if Not Used:
// The return value is not captured or used anywhere, so it's discarded.
function greet(name) {
  return `Hello, ${name}`;
}

greet("Arbaz"); // Discarded (No variable, no console.log)
// In this case, the return value is lost because it's not saved or used anywhere.
