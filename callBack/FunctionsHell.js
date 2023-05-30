/**
 * In Java: make database connection and some data, then use this data inside your code
 * ----> Connect to database
 * ----> get data
 * ----> java waits until the data is recieved
 * ----> then Java execute the rest of the code
 * ----> these steps is called synchronization
 * 
 * In JS: 
 * ----> while JS trying to connect to database
 * ----> the rest of the function does not wait
 * ----> this is called async code
 */

// func 1
function waitingForServerToAct() {
    let dataNeeded;
    setTimeout(() => {
        console.log('Backend information have just been recieved');
        dataNeeded = '------ Cydeo is very good school -------';
        console.log(dataNeeded);
    }, 5000);
}

// func 2
function functionThatNeedsBackEndData(info){
    console.log('I need to use Backend Data '+ info);
}

let data = waitingForServerToAct(); // calling server connections, getting the data and storing it in a variable

functionThatNeedsBackEndData(data); // this function does not wait for the result of the previous function

// in the above examples; we are trying to connect ti database and get some data
// and because JS is async, it does not wait for the func 1 to get data from server
// instead to jump to func 2 and execute it and returns undefined
// and later when the func 1 finishes connecting to server and getting the data, it finishes executing it
