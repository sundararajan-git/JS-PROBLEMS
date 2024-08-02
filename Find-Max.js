/*  FIND MAX NUMBER IN ARRAY  */


const findMax = (arr)=>{
    let maxNum=0;
    for(let i= 0; i<arr.length; i++){
        if(maxNum< arr[i]){
             maxNum =  arr[i]
        }
    }
    console.log(maxNum)
}


let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

findMax(arr)
