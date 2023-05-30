// no access modifies
// no method overloading
// no method overriding

// No return type function
function add(a, b) {
  console.log("total is: " + (a + b));
}
add(20, 40); // call a funciton
add(100, 200, 300); // does not throw an exeption but it ignores the last argument

// return type function
function multipy(a, b) {
  return a * b;
}

let sum = multipy(5, 5);
console.log(sum);

// function in JS is considered primitive data type
// It is called by JSers as first class citizens of JS
// 1. we can pass arguments to other functions
// 2. we can return a function from a function
// 3. we can store a function into a variable
let divide = function (a, b) {
  return a / b;
};

console.log(divide(30, 10));

let anyFunction = divide;
console.log(anyFunction(55, 10));

let subtract = (a, b) => {
  return a - b;
};

console.log(subtract(3, 1));

// pass a function as an agrument to another function
console.log(
  "================== pass a function as argument to unother functon ======================"
);

function avg(a, b, fn) {
  return fn(a, b) / 2;
}

let avgResult = avg(440, 60, divide);
avgResult = avg(10, 4, multipy);

console.log(`The average result is: ${avgResult}`);
