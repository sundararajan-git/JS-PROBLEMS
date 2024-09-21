
function sumOfDigits(num){
    num = String(num)
    let sum = 0;
    
    for(let i=0; i<num.length ; i++){
        sum += Number(num[i])
    }
   
    return sum
}

console.log(sumOfDigits(123))
