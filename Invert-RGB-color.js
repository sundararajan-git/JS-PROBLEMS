/*

Create a function that inverts the rgb 
values of a given tuple.

*/

function invertColor(x,y,z){
    
    //  give are rgb format

    // max value is 255 , so subtract each value

    let ans =` ${255-x }, ${255-y}, ${255 - z}`
    
    console.log(ans)
}


invertColor(0,0,0)

invertColor(165,170,221) 



