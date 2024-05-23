/*
Create a function that determines 
whether or not it's possible to split a pie 
fairly given these three parameters:

Total number of slices.
Number of recipients.
How many slices each person gets.
*/

function equalSlice(x,y,z){
    
    // x is number of slice possible
    // y is number of persons
    // z is number of slices for each persons

    // if equal to share possible return true 
    // else return false

    let ans = (y*z) <= x
    
    console.log(ans)
}


equalSlice(11,5,2)

equalSlice(11,5,3) 

equalSlice(8,3,2)

equalSlice(8,3,3)

equalSlice(24,12,2)


