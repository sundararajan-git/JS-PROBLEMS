
function replaceAll(str){
    let result =""
    
    for (let i of str) {
        if(i === " "){
            result += "-"
        }
        else{
            result +=  i
        }
    }
    
    return result
}

console.log(replaceAll("Hello World"))