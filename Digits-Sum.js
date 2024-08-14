/*
Calculate the sum of digits of a
positive integer number */

const calc = (n)=>{
    let str = n.toString()
    let sum=0;
    for(let i of str){
        sum += Number(i)
    }
    console.log(sum)
}

calc(1235231)
