/*
Create a function that takes
an array and returns the types
of values (data types) in a new array.
*/

function arrayValuesTypes(arr){
   arr = arr.map((i)=>{
      return typeof i
    })
  console.log(arr)
}


arrayValuesTypes([1, 2, "null", []])
//  ["number", "number", "string", "object"]

arrayValuesTypes(["214", true, false, 2, 2.15, [], null]) //  ["string", "boolean", "boolean", "number", "number", "object", "object"]

arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]) // ["number", "string", "string", "object", "
