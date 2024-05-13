
/*
 Write a JavaScript program that 
 checks whether the last digit of three 
 positive integers is the same.
*/

function checkLastDigit(x,y,z){
    if(x>0&&y>0&&z>0){
        console.log(x%10 === y%10 && y%10 === z%10
        && z%10 === x%10 )
    }
    else{
        console.log(false)
    }
}

checkLastDigit(10,50,10)
checkLastDigit(19,25,25)
checkLastDigit(88,818,88)
checkLastDigit(51,918,51)
