// Order of Operators in JS is the same as Java
console.log(4 + 4 * -1 - 8 / 2);

// assignement Operators (Shorthand Operators)
let x = 5;
x += 5;
console.log(x);

// comparision
let one = 1;
let one_again = 1;
let one_string = "1";
let two_string = "2";

console.log(one == one_again); // true
console.log(one == one_string); // true: == operator is comparing the value only
console.log(one === one_string); // false: === operator is comparing the value and datatype at the same time
console.log(one_string === two_string); // false: the value is different

// Logical Operators
// same as Java exept it has only short circuit &&, ||
console.log(5 > 2 && 2 > 5); // false

// control flow statements: if, switch, break, continue
let num1 = 100;
let num2 = 200;

if (num1 > num2) {
  console.log("num1 is bigger");
} else {
  console.log("num2 is bigger");
}

// ternary operator (Question Mark Operator)
let age = 25;
let isEligible = age > 188 ? true : false; // false because age is less the 188

console.log(isEligible);

// switch operator

let month = 41;
let dayCount = 0;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dayCount = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dayCount = 30;
    break;
  case 2:
    dayCount = 28;
    break;
  default:
    dayCount = 'Invalid month munber'; // changing the datatype of dayCount from number to string
    break;
}

console.log(dayCount);
