
/*
Create a function that takes two numbers 
and returns their sum as a binary string.
*/

function  addBinary(num1,num2){
    let sum = num1 + num2
console.log(sum.toString(2))
}

addBinary(1, 1)  //  "10"

addBinary(1, 2)  // "11"

addBinary(4, 5)  // "1001"
