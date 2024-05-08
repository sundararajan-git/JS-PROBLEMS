
/*
Write a JavaScript program to check
whether a string starts with 'Java' if it does 
not otherwise.
*/

function checkIs(str){
    
    if(str.length>4){
    let check = str.substring(0,4) === 'java'
    console.log(check)
    }else{
        console.log(false)
    }
}

checkIs("python")
checkIs("javascript")
checkIs("q")
checkIs('java')
