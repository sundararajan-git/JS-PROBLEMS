/*

Create a function, that will for a given a, b, c, do the following:

Add a to itself b times.
Check if the result is divisible by c.

*/

function  multiDivison(a,b,c){
     let x= a;
    let y=b;
    let z=c;

    for(let i=0; i<y; i++){
       x = x+x;
    }
    
  //console.log(x%z)

    let result = x%z ? false : true;

     console.log(result)

}


multiDivison(5,2,1)

multiDivison(1,2,3)


