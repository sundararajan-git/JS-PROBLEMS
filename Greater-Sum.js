/*
Write a function that returns 
the sum of elements greater than 5,
in the given array .
*/

function sumFive(arr){
    let sum = 0;
    if(arr.length >5){
        arr.map((i)=>{
            sum += i
        })
    }
    console.log(sum)
}


sumFive([1, 5, 20, 30, 4, 9, 18]) // 77

sumFive([1, 2, 3, 4]) //  0

sumFive([10, 12, 28, 47, 55, 100]) // 252
