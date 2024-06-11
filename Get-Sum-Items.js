/*
Create a function that takes
an array and returns the sum of all 
numbers in the array.
*/

function getSumOfItems(arr){
    let sum = 0;
    arr.map((i)=>{
         sum += i
    })
  console.log(sum)
 }

getSumOfItems([2, 7, 4])  // 13

getSumOfItems([45, 3, 0])  // 48

getSumOfItems([-2, 84, 23]) // 105
