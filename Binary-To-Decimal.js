/*

In mathematics and digital electronics, a
binary number is a number expressed 
in the base-2 numeral system or binary 
numeral system. Given an array of 
ones and zeroes of a binary number, 
return the equivalent decimal value.
*/

function  binaryToDecimal(arr){

  let str = "";
     arr.map((i)=>{
         str +=  String(i)
     })
   console.log(parseInt(str,2))
}

binaryToDecimal([0, 0, 0, 1]) //  1

binaryToDecimal([0, 0, 1, 0])  // 2

binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1])  // 1005

