
/*
Write a JavaScript program to create
another string by adding "Py" in front of 
a given string. If the given string begins with "Py" 
return the original string.
*/

function alterString(str){
    
    if(str=== null || str === undefined || 
       str.substring(0,2)==='py'){
        console.log(str)
       }else{
        console.log("py"+str)
       }
}

alterString(null)
alterString("python")
alterString("thon")
