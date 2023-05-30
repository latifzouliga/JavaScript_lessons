// there is no collection in JS
// in JS there is only Arrays and map
// Arrays size is dynamic
// there are two important Brackets in JS: [] and {}
// [] ----> for creating Arrays
// {} ----> for crating objects

let sports = new Array(); // creates an empty array
let emptyArray = []; // creates an empty array
let numbers = new Array(10); // create an Array withe the size of 10
let anyNumber = new Array(1, 1, 2, 3, 5, 8, 13); // create an array with elements
let colors = ["Red", "Green", "White"]; // string array

console.log(sports); // []
console.log(emptyArray); // []
console.log(numbers); // [ <10 empty items> ]
console.log(anyNumber); // [ 1, 1,  2, 3, 5, 8, 13 ]
console.log(colors); // [ 'Red', 'Green', 'White' ]

console.log("AnyNumber size is: " + anyNumber.length); // gets the size of array // 7

// print the scond element in colors array
console.log(colors[1]);

// add an element to an array
// push method: adds elements to the end of the array
colors.push("Orange");
console.log(colors);

// unshift method: add element to the beginning of the array
colors.unshift("White");
console.log(colors); // [ 'White', 'Red', 'Green', 'White', 'Orange' ]

console.log(colors.pop()); // it returns the last element and it remove it from the array
console.log(colors); // [ 'White', 'Red', 'Green', 'White' ]

console.log("============= for loop ============");

for (let k = 0; k < colors.length; k++) {
  console.log(colors[k]);
}

// loop with values of array
console.log("============= forof loop ============");

for (let value of colors) {
  console.log(value);
}

console.log("============= forEach loop ===========");

colors.forEach((element) => {
  console.log(element);
});

// can we add multiple type of data to an array
// we can add number, string, boolean, undefined, map,funciton, objects
let soupOfData = [5, "Oscar", true, undefined, null];

soupOfData.forEach((element) => {
  console.log(element + " is :" + typeof element);
});
