/*
Create a function that returns an
array of all the integers between
two given numbers start and end.
*/

function rangeOfNum(num1,num2){
    let arr = []
    for(let i = num1+1; i<num2; i++){
        arr.push(i)
    }
    console.log(arr)
}


rangeOfNum(2, 4) //  [3]

rangeOfNum(5, 9)  // [6, 7, 8]

rangeOfNum(2, 11)  // [3, 4, 5, 6, 7, 8, 9, 10]
