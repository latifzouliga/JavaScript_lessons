// we are using new Promise(function(resolve,reject))

let stateOfTheWebPage = function (state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("Page is loaded");
    } else {
      reject("Page is NOT loated yet");
    }
  });
};

console.log(
  stateOfTheWebPage(true).then((result) => {
    console.log(result);
  })
);

console.log(
  stateOfTheWebPage(false).catch(function (errorMSG) {
    console.log(errorMSG);
  })
);

console.log("========= another example ==========");

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 3000);
})
  .then((result1) => {
    console.log(result1);
    return result1 * 2;
  })
  .then((result2) => {
    console.log(result2);
    return result2 * 2;
  })
  .then((result3) => {
    console.log(result3);
    return result3 * 2; // the value increased to 8 but did not log to console
  });
