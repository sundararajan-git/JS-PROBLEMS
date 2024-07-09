
/*
You will be given a list of 32-bit unsigned integers. 
Flip all the bits 1 -> 0 and 0 -> 1 and return the result as an unsigned integer.
 */

function flippingBits(num){
   console.log((num  ^  0xFFFFFFFF)>>>0)
}

flippingBits(2147483647) // 2147483648

flippingBits(1) // 4294967294

flippingBits(4) // 4294967291
