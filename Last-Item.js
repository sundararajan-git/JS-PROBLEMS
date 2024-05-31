/*
Create a function that accepts
an array and returns the last
item in the array.
*/

function getLastItem(arr){
    // or using pop() method
     console.log(arr[arr.length-1])
}

getLastItem([1, 2, 3]) // 3

getLastItem(["cat", "dog", "duck"]) // "duck"

getLastItem([true, false, true]) //true


