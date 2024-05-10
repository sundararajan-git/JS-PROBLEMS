
/*
 Write a JavaScript program to find
 the largest of three given integers.  
*/

function findRange(x,y,z){
    if(x>y){
        if(x>z){
            console.log("x is " + x)
        }else{
            console.log("z is " + z)
        }
    }else{
        if(y>z){
            console.log("y is " + y)
        }else{
            console.log("z is "+ z)
        }
    }
}

findRange(10,50,105)
findRange(19,25,204)
findRange(58,87,0)
findRange(51,99,75)
