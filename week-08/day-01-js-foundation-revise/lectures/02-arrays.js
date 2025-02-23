const chaiTypes = ["Masala Chai", "Ginger Chai", "Green Chai", "Lemon Chai"];

//To find the position of values
console.log(chaiTypes[2]);

// To find the length of the array or how many values is present in the array
console.log(`Total Chai Types: ${chaiTypes.length}`);

// It will add the value at the last/end in the array
// Insert at Last
chaiTypes.push("Herbal Type");

// It will remove the last element from the array and will return the value
const data = chaiTypes.pop();
console.log(data); // Herbal Tea

// It will give the index number of the element
let index = chaiTypes.indexOf("Green Chai");
console.log(index); // 2

// if (index !== -1) {
//   chaiTypes.splice(index, 1);
// }
// console.log(chaiTypes); // [ 'Masala Chai', 'Ginger Chai', 'Lemon Chai' ]

// if the element is not present in the array then it will return -1
let indexes = chaiTypes.indexOf("Green Tea");
console.log(indexes); // -1

if (indexes !== -1) {
  chaiTypes.splice(indexes, 1);
}
console.log(chaiTypes); // [ 'Masala Chai', 'Ginger Chai', 'Green Chai', 'Lemon Chai' ]

// The indexOf() method returns the first index (position) of a specified value.
// The indexOf() method returns -1 if the value is not found.
// The indexOf() method starts at a specified index and searches from left to right (from the given start postion to the end of the array).
// By default the search starts at the first element and ends at the last.
// Negative start values counts from the last element (but still searches from left to right).

// forEach()
chaiTypes.forEach(function (chai, index) {
  console.log(`${index + 1}: ${chai}`);
});

// To add to array
let moreChaiType = ["OOlong Tea", "White Tea"];

// first way
let allChaiTypes = chaiTypes.concat(moreChaiType);

// second way using spread operator
// it unpacks the chaiTypes array
let newChaiTypes = [...chaiTypes, "Chamolina Tea"];
console.log(newChaiTypes);

// Objects Literals
let chaiRecipe = {
  teaName: "Masala Chai",
  ingredients: {
    teaLeaves: "Assam Tea",
    milk: "Full Cream Milk",
    sugar: "Brown Sugar",
    spices: ["Dalchini", "Ginger"],
  },
  instruction: "Boil water, add tea leaves, milk, sugar and spices",
};

console.log(chaiRecipe.ingredients.spices);
console.log(chaiRecipe.ingredients.spices[1]);

let updatedChaiRecipe = {
  ...chaiRecipe,
  instruction: "Boil water, add tea leaves, milk, sugar, spices with some love",
};
console.log(updatedChaiRecipe);
// this will override the instruction property

let { chaiName, ingredients } = chaiRecipe; // Object Destructuring
console.log(chaiName); // This is mapping
console.log(ingredients); // This is mapping

let [firstChai, secondChai] = chaiTypes; // Array Destructuring
console.log(secondChai);
