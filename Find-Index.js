/*
Create a function that takes an 
array and a string as arguments 
and returns the index of the string.
*/

function findIndex(arr1,n){
    console.log(arr1.indexOf(n))
}
findIndex(["hi", "edabit", "fgh", "abc"], "fgh") //  2

findIndex(["Red", "blue", "Blue", "Green"], "blue") // 1

findIndex(["a", "g", "y", "d"], "d") // 3



