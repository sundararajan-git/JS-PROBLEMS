/*
Create a function that takes an array
of strings and numbers, and 
filters out the array so that it returns
an array of integers only.
*/

function filterArray(arr){
    let fil =  arr.filter((i)=>Number.isInteger(i))
    console.log(fil)
}

filterArray([1, 2, 3, "a", "b", 4]) // [1, 2, 3, 4]

filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) //  [0, 1729]

filterArray(["Nothing", "here"]) //  []
