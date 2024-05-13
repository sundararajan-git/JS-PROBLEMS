
/*
 Write a JavaScript program to 
 convert letters of a given string 
 alphabetically
*/

function sortAlph(str){
    let finalStr = str.toLowerCase().split("").sort().join("")
    console.log(finalStr)
}

sortAlph("JavaScript ")
