
const str = 'i love you'

function countVowels(){
    let count = 0;
    const vArr = ['a','e','i','o','u']
    for(let i=0; i<str.length; i++){
        if(vArr.includes(str[i])){
            count ++
        }
    }
    return count
}

console.log(countVowels())