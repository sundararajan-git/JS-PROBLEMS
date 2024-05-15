
/*
Given an n-sided regular polygon n, 
return the total sum of internal angles 
(in degrees).
*/

function sumOfAngles(n){
     //  formula = (n-2)*180
    // n is greater than 2 else it'not ploygon
    if(n>2){
        console.log((n-2)*180)
    }else{
       console.log("It's not ploygon") 
    }
    
}

sumOfAngles(3)
sumOfAngles(6)
sumOfAngles(2)




