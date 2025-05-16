class Person {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }
  getFullName() {
    return `${this.fName} ${this.lName}`;
  }
}

// this is a special reference that points to the new object created by new keyword.
// In this case, this is pointing to the empty object {}.
// When you write this.fName = fName;, you are adding a property called fName to this new object.

const p1 = new Person("Faizan", "Ali");
const p2 = new Person("Arbaz", "Haider");

console.log(p1.getFullName());
console.log(p2.getFullName());

// Summary:
// new creates a new empty object and calls the constructor.
// this points to the new object inside the constructor.
// this.fName = fName; adds a property called fName to the new object.
// The new object is automatically returned and stored in p1.
