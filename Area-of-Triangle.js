/*
Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
*/

function  area() {

  // length of three side
  let a = 5 
  let b = 6
  let c = 7
  
  // heron's formula 
  // semi permeter  ,  s = (a+b+c) /2
  // area = √s(s-a)(s-b)(s-c)
  
  // find semi permeter
  let side = (a+b+c)/2
  
  // find area
  let area = Math.sqrt(side*((side-a)*(side-b)*(side-c)))
  
  console.log(area)
    
}

area()
