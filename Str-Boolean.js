
/*
Create a function that returns an array of booleans from a given
number by iterating through the 
number one digit at a time and 
appending true into the array if 
the digit is 1 and false otherwise.
*/

function  integerBoolean(str){
  let rearr = str.split("").map((i)=>{
     return i === "0" ?  false :  i==="1" ? true : null
  })
   console.log(rearr)
}

integerBoolean("100101") //  [true, false, false, true, false, true]

integerBoolean("10") //  [true, false]

integerBoolean("001")  // [false, false, true]

