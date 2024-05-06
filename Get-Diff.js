
/* 
Write a JavaScript program to get 
the difference between a given number 
and 13, if the number is broader than 13 return 
double the absolute difference.
*/

function getDiff(num){
    // if given num less then  or equal find diffrence
    if(num<=13){
        console.log(13-num)
    }
    //  if greater then  find double the absolute diffrence
    else{
        console.log((num-13)*2)
    }
}

getDiff(12)
getDiff(53)
