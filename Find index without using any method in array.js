var arr = [2,76,98,43]

function findIndex(num){
    let index;
    
    for(let i=0; i< arr.length; i++){
        if(num === arr[i]){
            index = i
        }
    }
    return index
}

console.log(findIndex(98))