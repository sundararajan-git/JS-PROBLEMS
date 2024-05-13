
/*
 Write a JavaScript program to 
 capitalize the first letter of each word in a 
 given string
*/

function captilizeTheFirstLetter(str){
    let sep =  str.split(" ")
    let finalStr = "";
    sep.map((i)=>{
        if(i){
        finalStr += i[0].toUpperCase()+i.substr(1)+" "
        }
    })
    console.log(finalStr)
}

captilizeTheFirstLetter("Write a JavaScript program to capitalize the first letter of each word   of a given string.")
