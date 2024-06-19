
/*
Create a function that takes two arguments of an array of numbers arr and 
a constant number n and returns the n largest numbers from the given array.
*/

function  largestNumbers(n, arr){
        let maxArr=[]
     for(let i=0; i<n;i++){
           let maxNum= Math.max(...arr)
           maxArr.push(maxNum)
          arr = arr.filter((i)=>i !== maxNum)
     }
   console.log(maxArr.sort())
}


largestNumbers(2, [4, 3, 2, 1]) //  [3, 4]

largestNumbers(1, [7, 19, 4, 2]) // [19]

largestNumbers(3, [14, 12, 57, 11, 18, 16]) // [16, 18, 57]

largestNumbers(0, [1, 3, 4, 2]) // []
