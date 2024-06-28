
/*
Imagine you have three numbers: a, b, and c. c is equal to either a or b, but you don't know which one. Your task is to create a function that returns whatever 
number c isn't, out of a and b. So, if c is equal to a, return b, and if c is equal to b, return a. Here's what makes this challenge difficult: you cannot use any if statements
*/

function  swap(x,y,z){
    console.log(x ^ y ^ z)
}


swap(1, 0, 0) //  1
// a = 1, b = 0, c = b
// return a

swap(1, 3, 1) // 3
// a = 1, b = 3, c = a
// return b

swap(27, 31, 31) // 27
// a = 27, b = 31, c = b
// return a
