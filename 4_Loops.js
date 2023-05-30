// the same as Java: for loop, while loop, do while loop

//================== for loop ======================
for(let i =0; i < 5; i++){
    console.log(i);
}

//console.log(i); // gives an exeption // this type is local scope

// old way of declaring variable before ES6
// 
for(var j = 0; j < 5; j++){
    console.log(j);
}

console.log(j); // prints 5 // this type is globle and function scope

//================ while loop =================
console.log('========= while loop ==============');

let n1 = 0;
while(n1 < 3){
    console.log(n1);
    n1++;
}

console.log('========= do while loop ==============');

let n2 = 0;

do{
    console.log(n2);
    n2++;
}while(n2 < 5);