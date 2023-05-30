// func 1
function waitingForServerToAct(myCallBack) {
  let dataNeeded;
  setTimeout(() => {
    console.log("Backend information have just been recieved");
    dataNeeded = '"Cydeo is very good school"';
    myCallBack(dataNeeded);
  }, 5000);
}

// func 2 // we need to call back this func 1 inside func 2 and make it wait until the data is recieved
function functionThatNeedsBackEndData(info) {
  console.log("I need to use Backend Data :" + info);
}

waitingForServerToAct(functionThatNeedsBackEndData);

/**
 * The first solution JS developers came up with was this callBack situation
 * After EC6, promises handles async natures of JS
 * In 2017, async functions and await keywords were intoduced
 */

// Interview Questions
// What is callBack Hell?
// What is async code?
// What is sync code?



// alert("This alert is comming from callBackSolution file")
/**
 * There are some function like alert and prompt work only with browser
 */
