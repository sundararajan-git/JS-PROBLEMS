/*
Create a function that takes two
 numbers num1, num2, and 
an array arr and returns an array
 containing all the numbers in arr greate
r than num1 and less than num2.
*/

function arrBetween(num1 , num2 , arr){
    let filteredArray = arr.filter((i)=>{
    return num1<i  && i<num2
    })
    console.log(filteredArray)
}

arrBetween(3, 8, [1, 5, 95, 0, 4, 7]) //  [5, 4, 7]

arrBetween(1, 10, [1, 10, 25, 8, 11, 6]) // [8, 6]

arrBetween(7, 32, [1, 2, 3, 78])  // []



