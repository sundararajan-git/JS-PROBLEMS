
var  arr = [1,2,3,1,2]
function removeDublucates(){
    const uArr = []
    const obj ={}
    for(let i=0; i< arr.length; i++){
        if(!obj[arr[i]]){
            uArr.push(arr[i])
            obj[arr[i]] = true
        }
    }
    return uArr
}

console.log(removeDublucates())