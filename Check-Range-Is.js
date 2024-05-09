
/*
Write a JavaScript program to check whether three 
given integer values are in the range 50..99 (inclusive). 
Return true if one or more of them are in the specified range.
*/

function checkRange(x,y,z){
    if((x>=50 && x<=99)|| (y>=50&&y<=98)||(z>=50&&z<=99)){
        console.log(true)
    }else{
        console.log(false)
    }
}

checkRange(10,50,105)
checkRange(19,25,204)
checkRange(58,87,0)
checkRange(51,99,75)
