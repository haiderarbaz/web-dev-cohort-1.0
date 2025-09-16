let teas = ["masala", "ginger", "oolong", "orange", "rose", "lemon"];

// we can access the tea
console.log(teas[0]);
console.log(teas[1]);
console.log(teas[2]);
console.log(teas[3]);
console.log(teas[4]);
console.log(teas[5]);

// we can check the length
console.log(teas.length);

// loop --> iteration; i
/*
  for loop:
    Syntax: 
      for(initialization, condition, increament/decreamenr){
        body;
      }
*/
// variable leke aao (let i = 0;)
// limit btao (i<teas.length)

for (let i = 0; i < teas.length; i++) {
  console.log(teas[i]);
}

for (let i = 0; i < teas.length; i++) {
  console.log(`Teas at index ${i}: ${teas[i]}`);
}
