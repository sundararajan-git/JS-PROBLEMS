
/*
Create a function that finds each
factor of a given number n. Your solution 
should return an array of the number(s) 
that meet this criteria.
*/

function  findFactors(n){
        let arr=[]
     for(let i=1; i <= n;i++){
        if( n % i == 0){
            arr.push(i)
        }
     }
   console.log(arr)
}

findFactors(9) // [1, 3, 9]
// 9 has three factors 1, 3 and 9

findFactors(12)  // [1, 2, 3, 4, 6, 12]

findFactors(20) //  [1, 2, 4, 5, 10, 20]

findFactors(0) //  []
// 0 has no factors
