// Array Declaration
let fruits = ["Apple", "Cherry", "Banana"];
console.log(fruits);
console.log(typeof fruits);

// Another way of Array Declaration
let intFruits = new Array("Kiwi", "Avocado", "Dragon Fruit");
console.log(intFruits);
console.log(typeof intFruits);

// Print first value
/*
  Note: Array numbering or you can say indexing or you can say value place is start from 0 not 1
*/
console.log(fruits[0]);
console.log(intFruits[0]);

console.log(fruits[1]);
console.log(intFruits[1]);

// Find the number of values in the array
console.log(fruits.length);
console.log(intFruits.length);

// Redeclare of a array
fruits[0] = "Mango";
intFruits[0] = "BlueBerry";

console.log(fruits[0]);
console.log(intFruits[0]);

console.log(fruits.length);
console.log(intFruits.length);

/*
 Note: Array length/number of values will be same
*/

/*
  Array Methods:
    push: Add/Appends new elements to the end of an array, and returns the new length of the array.

    Unshift: Add/Inserts new elements at the start of an array, and returns the new length of the array.

    Pop: Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

    sort: Sorts an array in place. This method mutates the array and returns a reference to the same array.
*/

// push
fruits.push("Litchi");
console.log(fruits);
console.log(fruits.length);

// unshift
fruits.unshift("Papaya");
console.log(fruits);
console.log(fruits.length);

// pop
fruits.pop();
console.log(fruits);
console.log(fruits.length);

// sort
fruits.sort();
console.log(fruits);
console.log(fruits.length);
