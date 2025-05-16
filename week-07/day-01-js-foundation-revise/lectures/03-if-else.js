function prepareChai(type) {
  if (type === "Masala Chai") {
    console.log("Adding spices to the chai");
  } else {
    console.log("Preparing regular chai");
  }
}
prepareChai("Masala Chai");
prepareChai("Ginger Chai");

/*
Ek online store mein, agar customer ka total bill amount 1000 se zyada hai, to 10% discount milta hai. Nahin toh, full amount pay karna padta hai.
*/
function calculateTotal(amount) {
  // validation: convert to number

  if (amount > 1000) {
    return amount * 0.9;
  } else {
    return amount;
  }
}
let finalBill = calculateTotal(1100);
console.log(finalBill);
console.log(calculateTotal(1200));

function calculateTotal0(amount) {
  // validation: convert to number

  return amount > 100 ? amount * 0.9 : amount;
}
let finalBill0 = calculateTotal0(1100);
console.log(finalBill0);
console.log(calculateTotal0(1200));

/*
    Ek traffic light system mein, agar light "red" hai, tow "Stop" print karo. Agar "yellow hai toh "Slow down" print karo. Agar "green" hai toh "Go" print karo.
*/
function trafficLight(color) {
  switch (color) {
    case "red":
      console.log("Stop");
      break;
    case "yellow":
      console.log("Slow down");
      break;
    case "green":
      console.log("Go");
      break;
    default:
      console.log("Chalan kaat do");
  }
}
trafficLight("green");
trafficLight("yellow");

function checktruthyVale(value) {
  if (value) {
    console.log("Truthy");
  } else {
    console.log("Falsy");
  }
}

checktruthyVale(1);
checktruthyVale(0);
checktruthyVale("Arbaz");
checktruthyVale("");
checktruthyVale([]);
checktruthyVale([1, 2, 3]);

function login(username, password) {
  if (username === "admin" && password === "1234") {
    console.log("Login successful");
  } else {
    console.log("Invalid Credentials");
  }
}
login("admin", "1234");
login("arbaz", "3456");

function userLogin(username, password, loginIp) {
  if (username === "admin" && (password === "1234" || loginIp == "127")) {
    console.log("Login successful");
  } else {
    console.log("Invalid Credentials");
  }
}
userLogin("admin", "1234", "127");
userLogin("admin", "3456", "127");
userLogin("admin", "3456", "333");
