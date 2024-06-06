/*
Create a function that takes as a 
parameter an array of "stringified" 
numbers and returns an array of numbers.
*/

function toNumberArray(arr){
   arr = arr.map((i)=>{
      return Number(i) 
    })
  console.log(arr)
}


toNumberArray(["9.4", "4.2"]) //  [9.4, 4.2]

toNumberArray(["91", "44"]) // [91, 44]

toNumberArray(["9.5", "8.8"]) // [9.5, 8.8]
