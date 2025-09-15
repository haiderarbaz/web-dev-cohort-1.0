console.log("Hello from WebDevCohort1.0 with Chai Aur Code");

function printWelcomeMessage() {
  console.log("Welcome to Day 1 of JavaScript");
}
printWelcomeMessage();

// Mini Factory/Functions

// 1.
function printChai() {
  console.log("Hello Arbaz");
}

// function calling or invoking
printChai();

// 2.
function bringBrush() {
  console.log("Haanji le aaya Brush");
}
bringBrush();

// 3.
function bringBrushN(kitne) {
  console.log(`Haanji le aaya ${kitne} Brush`);
}
bringBrushN(5);

// 4.
function bringBrushNumber(numberOfBrush) {
  console.log(`Haanji le aaya ${numberOfBrush} Brush`);
}
bringBrushNumber(18);

// 5.
function add(num1, num2) {
  return num1 + num2;
}
const result = add(4, 6);
console.log(`Result is: ${result}`);
