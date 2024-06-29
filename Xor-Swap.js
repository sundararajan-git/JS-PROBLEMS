
/*
This is more informational than a challenge. You can actually switch 2 variables with the XOR operation ^. XOR works with two arguments. It turns both arguments into their binary representations, and for each bit, returns 1 if they are different, 0 otherwise.

The return value is the decimal representation of the new binary string. So, if you don't know how to do it, go play around with it! After some time on paper, you will understand what is going on, and how it works.

Your job is to switch 2 variables using the XOR operator, which means your return statement should be return[a, b], but the values stored in the variables need to be switched.
 */

function xor(x,y){
    console.log(y ^ 0 ,  x ^0 )
}


xor(10, 41) // (41, 10)

xor(69, 420) //  (420, 69)

xor(12345, 890412) //  (890412, 12345)
