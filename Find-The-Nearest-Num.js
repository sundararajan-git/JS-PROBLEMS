
function roundNum(num){
    const decimal = num % 1
    if(decimal >=0.5){
        return Number(String(num).split(".")[0]) + 1
    }else{
      return Number(String(num).split(".")[0])
    }
}


console.log(roundNum(3.19))
console.log(roundNum(3.59))
