
/*
 Write a JavaScript program to find
 the closest value to 100 from two 
 numerical values
*/

function findClosest(x,y){
    if(x>y&&x<100){
        console.log("x is  closest " , x)
    }else{
        console.log("y is closest " ,y)
    }
}

findClosest(10,-50)
findClosest(19,25)
findClosest(88,87)
findClosest(51,99)
