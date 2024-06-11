/*
Create a function that takes an 
array of numbers arr 
and returns an inverted array.
*/

function invertArray(arr){
    arr = arr.map((i)=>{
         return -i
    })

 console.log(arr)

}

invertArray([1, 2, 3, 4, 5])  // [-1, -2, -3, -4, -5]

invertArray([1, -2, 3, -4, 5])  // [-1, 2, -3, 4, -5]

invertArray([]) //  []
