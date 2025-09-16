/*
  90 >= A
  80 >= B
  70 >= C
  60 >= D
  60 <= F
*/

function calculateGrade(marks) {
  if (marks >= 90) {
    return "Grade A";
  } else if (marks >= 80) {
    return "Grade B";
  } else if (marks >= 70) {
    return "Grade C";
  } else if (marks >= 60) {
    return "Grade D";
  } else {
    return "Grade F";
  }
}

const finaleGrade = calculateGrade(85);
console.log("Your final grade is: ", finaleGrade);
console.log(`Your final grade is: ${finaleGrade}`);

console.log("Your final grade is:", calculateGrade(55));
