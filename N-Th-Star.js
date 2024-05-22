/*
Create a function that takes a
positive integer n and returns the nth
"star number".

A star number is a centered 
figurate number that represents a
centered hexagram (six-pointed star), 
such as the one that Chinese checkers is 
played on.


*/

function nThStar(n){
    
    //  find the  n th number of stars
    // formula is 6n(n-1)+1

    let ans = 6*(n*n) - (6*n) + 1
    
    console.log(ans)
}


nThStar(2)

nThStar(3) 

nThStar(5)


