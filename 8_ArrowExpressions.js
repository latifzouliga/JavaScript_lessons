// before ES6
let x = function (a) {
  return a * 5;
};

// after ES6
let y = (a) => a * 5;

console.log(x(5)); // 25
console.log(y(4)); // 20

// map function that come with arrow expressions
let arr = [5, 10, 20];

// multipy all array element by 2
let newArr = arr.map((x) => x * 2);

console.log(newArr);

//=========================== varArgs or the magic 3 dots ====================

// varArgs: insert an array inside an array
let mid = [3, 4];
let arr2 = [1, 2, ...mid, 5, 6];
console.log(arr2);

// example:
function howManyElements(...Args) {
  console.log(Args.length);
}
howManyElements();
howManyElements(5);
howManyElements(3, 4, 7, 8, 9);

//--------- the three dots is for unkown number of arguments ------------
function multiply(multipier, ...theArgs){
    return theArgs.map(x => x * multipier)
}

console.log(multiply(3, 10, 20, 30, 40, 1, 2)); // [ 30, 60, 90, 120, 3, 6 ]

// convert a string to char array
let str = 'Cydeo';
let chars = [...str];
console.log(chars);

