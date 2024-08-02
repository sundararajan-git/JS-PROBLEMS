/*  FIND MIN NUMBER IN ARRAY  */


const findMin = (arr)=>{
    let minNum=0;
    for(let i= 0; i<arr.length; i++){
        if(minNum > arr[i] ||  minNum === 0){
             minNum =  arr[i]
        }
    }
    console.log(minNum)
}


let arr = [5, 10, -3, 12, -9, 5, 90, 0, 1];

findMin(arr)
