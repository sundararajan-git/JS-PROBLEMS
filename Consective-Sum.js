
/*
Create a function that takes a number n as an 
argument and checks whether the given 
number can be expressed as a sum of two or 
more consecutive positive numbers.
 */

function consecutiveSum(n){
     let  isvalid= false;
     let count = 0;

    for(let i=0; i<n; i++){
          count = 0;
        for(j=i; j<n;j++){
             count += j
              if(count === n){
                   isvalid = true
              }
        }
    }
     console.log(isvalid)
}
    


  consecutiveSum(9) // true
// 9 can be expressed as a sum of (2 + 3 + 4) or (4 + 5).

consecutiveSum(10) // true
// 10 can be expressed as a sum of 1 + 2 + 3 + 4.

consecutiveSum(64) // false
