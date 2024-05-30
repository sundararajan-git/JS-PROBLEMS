
/*

You are given 2 out of 3 angles in a triangle, in degrees.

Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.

An acute angle is less than 90 degrees.
A right angle is exactly 90 degrees.
An obtuse angle is greater than 90 degrees (but less than 180 degrees).
For example: missingAngle(11, 20) should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.

*/

function  misingThridAngle(a,b){
    
          let c = Math.abs(a+b-180)

        if(c<90){
            console.log("acute")
        }else if(c===90){
            console.log("right")
        }else if(c>90 && c <180 ){
            console.log("obtuse")
        }else{
            console.log("it's not triangle")
        }
    
}


misingThridAngle(27,59)

misingThridAngle(135,11)

misingThridAngle(45,45)


