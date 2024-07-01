
/*
Create a function that takes an array and finds the integer 
which appears an odd number of times.
 */

function findOdd(arr){
   let filterArr =  []
       arr.map((i)=>{
        let val = arr.filter(j=> j === i).length % 2
        if(val){
           filterArr.push(i)
         }
    })
    let newArr  = new Set(filterArr)
    console.log(...newArr)
}

findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]) // -1

findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]) // 5

findOdd([10]) // 10
