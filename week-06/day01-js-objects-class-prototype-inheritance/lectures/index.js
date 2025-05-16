// Object Literal

const obj1 = {
  fName: "Arbaz",
  lNAme: "Haider",
  getFullName: function () {
    return `${this.fName} ${this.lNAme}`;
  },
};
const obj2 = {
  fName: "Pushp",
  lNAme: "Raj",
  getFullName: function () {
    return `${this.fName} ${this.lNAme}`;
  },
};

console.log(obj1);
console.log(obj2);

console.log(obj1.getFullName()); // Arbaz Haider

// console.log(obj2.getFullName());
// this log will give TypeError: obj2.getFullName is not a function

// when you will add getFullName function in obj2 then it will run
console.log(obj2.getFullName()); // Saahil Chawla

// But here we are violating a coding principle
// i.e; DRY - Do not repeat yourself (this means aapke code ke andar kisi bhi type ke funcionalities repeat nahin honay chahiye)
// in future if you get know that there is some bug in the function getFullName toh humein woh har jagah chage karni padegi jaha bhi getFullName function hoga

// like if there is a person who don't have a last name so in that case we have to add the below condition in every object
const obj3 = {
  fName: "Saahil",
  lName: "Chawla",
  getFullName: function () {
    if (this.lName !== undefined) return `${this.fName} ${this.lName}`;
    else return this.fName;
  },
};
// and there is a high error chances that we out miss this and iske wajah se debugging mushkil ho jayegi

// to solve this, in Modern JavaScript we were intoduced to Classes

const obj4 = {
  fName: "Arshad",
  lNAme: "Imam",
  getFullName: function () {
    return `${this.fName} ${this.lNAme}`;
  },
  // it will have __proto__ of Object (built in class)
};
const obj5 = {
  fName: "Nasim",
  lNAme: "Haider",
  //   getFullName: function () {
  //     return `${this.fName} ${this.lNAme}`;
  //   },

  // it will have __proto__ of Object (built in class)
};

console.log(obj4);
console.log(obj5);

console.log(obj4.getFullName());
// console.log(obj5.getFullName());
// TypeError: obj5.getFullName is not a function

// Here in the above example obj4 and obj5 we are violating DRY principle in line number 56 By creating function two times

// In case if we remove the getFullName() from obj5
// console will go in obj5 and check there is any function getFullName is available or not, if it's not available
// then it will go to obj5 __proto__ and check

// if we put obj4 inside obj5.__proto__

obj5.__proto__ = obj4;
// this will update the proto of obj5 and it will refer to obj4

obj4.__proto__ = null;
// ( yeh line object ka refrence hi uda diya) (object ka refrence toot jayega)

// obj5.getFullName();
// first it will check inside obj 5 that this getFullName is available or not
// then it will check inside __proto__ and then it will work because obj5.__proto__ is refring to obj4 and in obj4 this getFullName property is available
console.log(obj5.getFullName());

// same for toString()
console.log(obj5.toString());

// till where this __proto__ will go?
// jaba tak __proto__ null na ho jaye tab tak yeh jata rahega.

// obj4.__proto__ will point to Object class
// obj4.__proto__.__proto__ object class will point to null
// obj4.__proto__ = null; ( yeh line object ka refrence hi uda diya) (object ka refrence toot jayega)
// if we do this we will get an error for console.log(obj5.toString()) because we are breaking the chain
// when we will remove obj4.__proto__ = null; this console.log(obj5.toString())  will run
