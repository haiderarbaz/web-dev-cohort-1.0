/*
  DataTypes:
  
  Primitive Datatypes:
    String
    Number
    Boolean
    null
    undefined
    Symbol
    BigInt
  
  Non-Primitive Datattypes:
    Array
    Objects

*/

// Primitive DataTypes:

// String can be declared by = " "(Double Quotes), ' '(Single Quotes), ` `(BackTick)
let name = "Rohit";

// Number (Number can be integer or float) : 25, 25.78
let age = 25;

// Boolean: true, false
let isPaid = true;

// null: It means a variable has been explicitly set as (no value = null) or has been initialized and defined to be nothing. (it means empty (emptiness) mtlb khali)(explicitily: jaan bujh kar khali rakhi gayi hai)
let favouriteClass = null;

// undefined: It means a variable has been declared but has not yet been assigned a value. (no usage) (we can say it as baad mein dekhengey)
let hometown;

// Print
console.log(favouriteClass);
console.log(hometown);

// Non-Primitive DataTypes
// Non-Primitive DataTypes are also called as object

// Array: It is group of similar data elements, also known as homogeneous elements, stored at contiguous memory locations that can be accessed directly using an index number.
// Indexing start from 0 in Array.
let skills = ["HTML", "CSS", "JavaScript"];

// Object : key value pairs (key is studentName, and value is "Arbaz")
let studentProfile = {
  studentName: "Arbaz",
  studentAge: 27,
  isPaid: true,
  skills: ["HTML", "CSS", "JavaScript"],
  favouriteClass: null,
  hometown,
};

// typeOf : It tells you about the variable Datatype.
console.log(typeof isPaid);
// Output: Boolean

console.log(typeof skills);
// Output: Object

console.log(typeof studentProfile);
// Output: Object

console.log(typeof hometown);
// Output: Undefined

console.log(typeof null);
// Output: object

function add(num1, num2) {
  return num1 + num2;
}

console.log(typeof add);
// Output: function

/*
  Note: JavaScript is a object oriented programming language, everything is treated as object.
*/

/*
  Note: JavaScript variable are very powerful because they gave direct refrence to the memory. You can store anything in it.
  Sometimes it store C++ variable refrence also.
*/
