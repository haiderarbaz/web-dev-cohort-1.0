/*
  Processing: conditionals
*/

/*
  Server call (rainy, cloudy, sunny)
*/
let weather = "rainy";

/*
  Syntax:
    if(<condition check>){
      body
    } else {
      body
    }
*/

if (weather === "rainy") {
  console.log("It's raining, don't forget to carry Umbrella");
} else {
  console.log("Weather is cloudy");
}

// variable reassignment
weather = "cloudy";

if (weather === "rainy") {
  console.log("It's raining, don't forget to carry Umbrella");
} else {
  console.log("Weather is cloudy");
}

// again variable reassignment
weather = "sunny";

if (weather === "rainy") {
  console.log("It's raining, don't forget to carry Umbrella");
} else if (weather === "cloudy") {
  console.log("Weather is cloudy");
} else {
  console.log("It's a sunny☀️ day");
}

/*
  Variables declared with let can be reassigned to a new value after their initial declaration.
  But only in that block scope not outside the block scope. Means {...} only inside this bracket we can reassigned it not oustside of it
*/

console.log(weather == "rainy");
console.log(weather === "rainy");

/*
  = --> value assignement right to left;
  == --> loose equality check (it checks only the value)
  === --> tight equality check (it checks the value as well as the datatype of value)
*/
