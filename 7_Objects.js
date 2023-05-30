// for creating an object in JS we just need to use {} and pass to it attributes
let person = {
  firstName: "Latif",
  lastName: "Zouliga",
  gender: "Male",
  grades: ["A", "B", "C"],
};

console.log(typeof person);
console.log(person);

console.log(person.firstName); // Latif

let address = {
  "building no": 5555,
  street: "Wilson Rd",
  state: "Pennsylvania",
};

// to reach the data of an object we can use square brackets [] or dot
// if the attribute key has a space we need to use []
// if the attribute key is string we can use [] or .
console.log(address["building no"]);
console.log(address["street"]);
console.log(address.state);

// add new property to object
person.age = 30;
console.log(person);
// In the above example the age keyword is not declared in the original person object

// delete a property
delete person.age;
console.log(person);

// check a property if it exist
console.log("street" in address);

// we can add arrays inside objects

let course = {
  name: "JS",
  url: "www.cydeo.com",
  subjects: ["Objects", "Arrays", "Functions", "Live Server"],
};

console.log(course);

// loop using the keys of the objects

for (const key in course) {
  console.log(key + ": " + course[key]);
}
// value which was an array turned into string
/**
 * we will hava fixture folder in Cypress Tool, we store JSON files
 */

// iterating array inside course object
for (const key of course.subjects) {
  console.log(key);
}

// Let's create an object with function, array, object ...
let myCar = {
  car: "Dacia",
  color: "Orange",
  year: 2022,
  engine: {
    cylanders: 3,
    size: 1.0,
    fuel: "Gasoline",
  },
  extras: ["AC", "Cruise Control", "Sound System"],
  drive: function () {
    console.log("Running on LPG");
  },
};

// drive function
myCar.drive(); // similar to Java

// get 'Cruise Control'
console.log(myCar.extras[1]) // same as getting data from JSON file in API
