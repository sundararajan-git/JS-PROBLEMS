
const str = 'i love you'

function upperStr(){
    let result='';
    for(let i=0; i < str.length ; i++){
        let charcode = str.charCodeAt(i)
        if(charcode >=97 && charcode <= 122){
            charcode -= 32
        }
        result += String.fromCharCode(charcode)
    }
    return result
}

console.log(upperStr())