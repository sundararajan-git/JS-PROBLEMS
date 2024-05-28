
/*
Create a function that takes two 
numbers and a
mathematical operator and 
returns the result.

*/

function  calculate(x,y,z){

  // let contract  string then calculate the operation

 // using eval function or contractor function

    let exp = x+z+y;
    
   console.log(eval(exp))
    
}


calculate(4,9,"+")

calculate(12,5,"-")

calculate(6,3,"*")

calculate(25,5,"/")

calculate(14,3,"%")


