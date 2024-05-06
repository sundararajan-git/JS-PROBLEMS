
/* 
Write a JavaScript program to
compute the sum of the two given 
integers. If the two values are the same,
then return triple their sum.
*/

function getSum(a,b){
    // if given two numbers are equal  sum and triple the value
    if(a===b){
        console.log((a+b)*3)
    }
    //  else not equals sum the two number
    else{
        console.log(a+b)
    }
}

getSum(12,10)
getSum(20,20)
