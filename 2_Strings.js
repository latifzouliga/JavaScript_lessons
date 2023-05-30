// types of quotes in JS
// there are 3 types of quotes

let str1 = 'Java';
let str2 = "Script";
let str3 = "awsome";

let result = "The result variable is with concatenation: "+ str1 + str2 + ' ' + str3; // like Java

console.log(result);

// backticks for variable insertions
result = `the result variable is with backticks: ${str1}${str2} ${str3}`;

console.log(result);