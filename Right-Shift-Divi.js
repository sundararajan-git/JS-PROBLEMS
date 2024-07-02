
/*

The right shift operation is similar to
floor division by powers of two, thus, 
the process is repetitive and can be done
recursively.

Write a function that mimics (without the use of >>) 
the right shift operator and returns 
the result from the two given integers.
 */

function shiftToRight(a,b){
   
     let ans = Math.floor(a/Math.pow(2,b))
    console.log(ans)
}

shiftToRight(80, 3) // 10

shiftToRight(-24, 2) // -6

shiftToRight(-5, 1) // -3

shiftToRight(4666, 6) // 72

shiftToRight(3777, 6) // 59

shiftToRight(-512, 10) // -1
