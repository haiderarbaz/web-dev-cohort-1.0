// Question 1.)

// Adding a Method to Function.prototype:
Function.prototype.describe = function () {
  // Here, we are adding a new method called describe to the Function.prototype.
  // Function.prototype is the prototype from which all functions inherit.
  // This means that every function in JavaScript will now have access to this describe method.

  console.log(`Function name is ${this.name}`);

  // Jisne bulaya this usi ka it means this refers to the function it was called on, which is greet in this case.
  // .name is a built-in property of functions in JavaScript that gives the name of the function.
  // Here, this.name becomes "greet".
};

// Creating a Function:
function greet(name) {
  return `Hello ${name}`;
}
// This is a regular function named greet that takes a parameter name.
// It returns a greeting message but is not called directly here.

// Calling the describe Method:
greet.describe(); // It Returns "Function name is greet"
// Here, we are calling the describe method on the greet function.
// Since describe is a method available on all functions (because we added it to Function.prototype), greet.describe() works.
// Inside the describe method, this refers to the greet function. Therefore, this.name is "greet".

// Why It Returns "Function name is greet"
// When greet.describe() is called, .describe() uses this.name, which points to the name of the function it is called on.
// In this case, it was called on greet, so this.name becomes "greet".
// Therefore, console.log(Function name is ${this.name}); outputs "Function name is greet".

// Question 2.)

// It's a function declaration
function add(a, b) {
  return a + b;
}

// It's a function expression
const subtract = function (a, b) {
  return a - b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Question 3.)

// here we are taking 3 parameter a, b, and operation and returning a function operation.
function applyOperation(a, b, operation) {
  return operation(a, b);
}
const result = applyOperation(5, 4, (x, y) => x / y);
// This is first class function
console.log(result);

const result0 = applyOperation(5, 4, (x, y) => x * y);
// This is first class function
console.log(result0);

// Question 4.)

// Tiffin Concept
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
// createCounter() returns the inner function
// Inside createCounter(), a variable count is declared and initialized to 0.
// Here the inner function increments count by 1 each time it's called and returns the current value of count.

// The returned function has access to the count variable because of lexical scoping (the inner function remembers its outer function's scope, even after the outer function has finished executing).

const counter = createCounter();
// When createCounter() is called, it creates a new closure where count is set to 0, and it returns the inner function.
// The returned function (which increments count) is assigned to the variable counter.
// Now, counter refers to the inner function, and each time you call counter(), it will access and modify the count variable.

console.log(counter()); // 0 to 1 and returns 1
// Now, counter() is called.
// The first time counter() is called:
// The inner function executes, increments count from 0 to 1, and returns 1.
// console.log(counter()) prints 1.
// So, the first output is 1.

console.log(counter()); // 1 to 2 return 2
// The next time you call counter(), it will increment count from 1 to 2, and return 2.

// Each call to counter() will keep increasing the count because count is preserved in the closure created by createCounter().

// Key Concepts:
// Closure:
// The returned function (the counter) has access to the count variable even after createCounter() has finished executing. This is because of closures — the inner function remembers the environment in which it was created.
// Stateful Function:
// createCounter() creates a function that keeps track of its own state (count). Each time counter() is called, it "remembers" the last value of count and increments it.

// Question 5.)
// IIFE :- Immediately Invoked Function Expression

(function () {
  console.log("Arbaz");
})();
