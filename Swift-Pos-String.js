
/*
Write a JavaScript program to create a new string 
from a given string by changing the position of the 
first and last characters. The string length must be
broader than or equal to 1.
*/

function swiftPos(str){
    if(str.length>1){
    let newStr = str.slice(1)+str[0]
    console.log(newStr)
    }else{
        console.log("string is single character")
    }
}

swiftPos("python")
swiftPos("India")
swiftPos("q")
