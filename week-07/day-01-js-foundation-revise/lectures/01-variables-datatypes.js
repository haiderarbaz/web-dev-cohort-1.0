// Data(Kya hamare pass data hai) & Operations(and unpe hum kya kya operations kar sakte hai)

// How to declare data
// By using Var, Const, & Let keyword we declare data
// We don't use var because of scope issues.

// Data & It's types

// Primitives & Non-Primitives(Objects(Almost everything is Objects in JavaScript))

// Primitives
let userName = "Arbaz Haider"; // String DataType (We always give the first Later UpperCase(Like: String, Number, Null etc) while the naming of DataTypes because of Technical Jargons (Waise capital ho ya na koi farq nahin padta just for technica Jargons dete hai) )
const pi = 3.14; // Number DatatType

let number = 28; // Number DataType
let myName = "Arbaz Haider"; // Strig DataType
let isTrue = true; // Boolean

let nothing = null; // Data type is Null but when do log typeof null it returns object
console.log(typeof null);

let undefinedVar = undefined; // undefined
console.log(typeof undefinedVar);

let symbolVar = Symbol(); // Symbol
console.log(typeof symbolVar);

let bigNumber = 9007199254740991n; // bigint
console.log(typeof bigNumber);
const hugeNum = BigInt(90909090990);
console.log(hugeNum);

// Objects
let person = {
  personName: "Arbaz",
  age: 27,
  isStudent: true,
};
console.log(person.personName); // Arbaz
console.log(person.age); // 27
console.log(person.isStudent); // true

// Conversion

// String to Number

// first way(standarized way)
let num = "42";
console.log(typeof num); // String

let convertedNum = Number(num); // This will convert num string to number
console.log(convertedNum); // 42
console.log(typeof convertedNum); // number

let numb = "42a";
let convertedNumb = Number(numb);
console.log(convertedNumb); // Nan (NaN is still a numeric type. It just means that the value cannot be represented as a number, but it still belongs to the number type. NaN can't be equal to another NaN since their values may be different.)
console.log(typeof convertedNumb); // number

// second way
let num0 = "53";
let convertedNum0 = +num0;
console.log(convertedNum0); // 53
console.log(typeof convertedNum0); // number

let numb0 = "53c";
let convertedNumb0 = +numb0;
console.log(convertedNumb0); // Nan (NaN is still a numeric type. It just means that the value cannot be represented as a number, but it still belongs to the number type. NaN can't be equal to another NaN since their values may be different.)
console.log(typeof convertedNumb0); // number

// third way (using parseInt)
let num1 = "63";
let convertedNum1 = parseInt(num1);
console.log(convertedNum1);
console.log(typeof convertedNum1);

let numb1 = "63a";
console.log(typeof numb1);

let convertedNumb1 = parseInt(numb1);
console.log(convertedNumb1); // 63 (because parseInt(numb1) extracts the numerical part from the beginning of the string ("63a").It starts reading from the left and stops at the first non-numeric character ('a' in this case)).
console.log(typeof convertedNumb1); // number

// If the string doesn't start with a number, parseInt() will return NaN:
let num2 = "a62";
let convertedNum2 = parseInt(num2); // Nan (the string "a63" does not start with a number, so parseInt() returns NaN.)
console.log(convertedNum2);
console.log(typeof convertedNum2);

// Note :
// parseInt() reads numbers from the beginning of a string and stops at the first non-numeric character.
// parseInt("720px") → 720
// parseInt("999 caps") → 999

//If the string does not start with a number, parseInt() returns NaN.
// parseInt("abc123") → NaN

// Number to String

let str = 123;
let convertedString = String(str);
console.log(convertedString); // "123"

// Operations

// Arithmetic
// 4+4-6*3 → (4+(4-6))*3) (Better Way)

let a = 10;
let b = 4;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;
let power = a ** b;

// Relational
let x = 5;
let y = 10;

console.log(x == y); //false // Losse Equality (checks only data)

console.log(x === y); //false // Strict Equality (checks data as well as it's types)

console.log(x != y); // true

console.log(x > y); // false
console.log(x < y); // true
console.log(x >= y); // false
console.log(x <= y); // true

let p = 10;
let q = 10;
console.log(p >= q); // true
console.log(p <= q); // true

// Note:
// Comparison operators check for both greater/less than and equality.
// If the values are different, one comparison (>= or <=) will be false, and the other will be true.
// If the values are the same, both comparisons (>= and <=) will return true.

// Math

console.log(Math.max(5, 10)); // 10
console.log(Math.min(5, 10)); // 5

let randomNumber = Math.random() * 10;
// Math.random() always returns a number between 0 (inclusive) and 1 (exclusive), like:

let roundOff = Math.round(randomNumber);
console.log(roundOff);

let floorOff = Math.floor(randomNumber);
console.log(floorOff);

// Math.round() method returns the value of a number rounded to the nearest integer.
// Example:
console.log(Math.round(0.9)); // output: 1

console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05)); // output: 6 6 5

console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95)); // output: -5 -5 -6

// Math.floor() method always rounds down and returns the largest integer less than or equal to a given number.
console.log(Math.floor(5.95)); // output: 5
console.log(Math.floor(5.05)); // output: 5
console.log(Math.floor(5)); // output: 5
console.log(Math.floor(-5.05)); // output: -6

// Using Math.random () write a function that return a number in between 1 to 6 inclusive 1 & 6

function randomNumber0(min, max) {
  // min and max included

  return Math.floor(Math.random() * (max - min + 1) + min);

  // Math.random() * (max - min + 1) + min this will make sure that the random number range from min to max

  // Math.random() always generate a number between 0(inclusive) and 1(exclusive)

  // When we multiply Math.random() * (max - min + 1) it gives a number between 0 to 6 and the minimum value remains 0 and here min is 1 and max is 6

  // The random number starts of 0 but we need a minimum number start is 1

  // now adding + min shift the range start from min instead of 0

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
const diceRoll = randomNumber0(1, 6);
console.log(`Your Random number between the range of 1 to 6 is ${diceRoll}`);

// Strings
let fName = "Arbaz";
let lName = "Haider";
let fullName = fName + " " + lName;
console.log(fullName); // Arbaz Haider
let fullName0 = `${fName} ${lName}`; // Tempelate Literals
console.log(fullName0); // Arbaz Haider
console.log(fName.length); // 5

let userEmail = "Arbazhaider830@gmail.com";
console.log(userEmail.toLowerCase()); // arbazhaider830@gmail.com

let couponCode = "arbaz20";
console.log(couponCode.toUpperCase()); // ARBAZ20

console.log(fName.indexOf("A")); // 0
console.log(fName.indexOf("r")); // 1
console.log(fName.indexOf("b")); // 2
console.log(lName.slice(0, 6)); // Haider

const greetMessage = "Hey There";
console.log(greetMessage.slice(0, 6)); // Hey Th
