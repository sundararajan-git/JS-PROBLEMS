
/*
Write a JavaScript program to remove a character 
at the specified position in a given string 
and return the modified string.
*/

function removeString(str,position){
    let remove1 = str.substring(0,position)
    let remove2 = str.substring(position+1,str.length)
    console.log(remove1+remove2)
}

removeString("python",3)
removeString("India",0)
