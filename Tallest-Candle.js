
/*
You are in charge of the cake for a child's birthday. 
You have decided the cake will have one candle for each year of their total age. 
They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
*/

function  birthdayCakeCandles(arr){
     let taleastCandle = Math.max(...arr)
     let ans = arr.filter((h)=> h === taleastCandle).length
     console.log(ans)
}


birthdayCakeCandles([4, 4, 1, 3]) // 2

birthdayCakeCandles([3, 2, 1, 3]) // 2

birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25])  //  4
