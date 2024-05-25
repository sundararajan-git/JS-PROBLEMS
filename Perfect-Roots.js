/*

Given a number n, 
find if its 2nd, 4th and 8th 
roots are all integers (perfect roots), 
return true if it exists, false if not.

*/

function perfectRoots(x){

  // finds 2 sqrt  , 4 sqrt , 8 sqrt

    let secondSqrt = Math.sqrt(x)

    let fourthSqrt = Math.sqrt(secondSqrt)

    let eightSqrt = Math.sqrt(fourthSqrt)

    console.log(secondSqrt, fourthSqrt , eightSqrt)
    
   if( Number.isInteger(secondSqrt) &&
        Number.isInteger(fourthSqrt) && 
        Number.isInteger(eightSqrt) ) {
       console.log(true)
   }else {
       console.log(false)
   }

}


perfectRoots(256)

perfectRoots(1000)


