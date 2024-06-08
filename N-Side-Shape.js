/*
Create a function that takes a 
whole number as input and returns 
the shape with that number's amount of
sides. Here are the expected outputs to 
get from these inputs.
*/


var arr = [
"circle",
"semi-circle",
"triangle",
"square",
"pentagon",
 "hexagon",
 "heptagon",
 "octagon",
 "nonagon",
 "decagon"]


function nSidedShape(num){
console.log(arr[num-1])
}

nSidedShape(3) // "triangle"

nSidedShape(1) // "circle"

nSidedShape(9) // "nonagon"
