
/*
Write a function that accepts the width and height (m, n) and an optional proc s and generates an array with m elements. Each element is a string consisting of either:

The default character (hash #) repeating n times (if no proc is given).
The character passed in through the proc repeating n times.
*/

function  makeRug(r,n,str){
   let ele ="";
    for(let i=0;i<n;i++){
        let s =  str ? str :  "#"
        ele += s
    }
    
   let arr= []
    for(let i=0;i<r;i++){
        arr.push(ele)
    }
   console.log(arr)
}

makeRug(3, 5)
/* [
  "#####",
  "#####",
  "#####"
] */

makeRug(3, 5, '$')  
/*[
  "$$$$$",
  "$$$$$",
  "$$$$$"
] */

makeRug(2, 2, 'A')  
/* [
  "AA",
  "AA"
] */

