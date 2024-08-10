//  To find the find fibonacci series

const findfibonacci  = (n)=>{
    let arr = [0,1]
    for(let i = 0 ; i<n ; i++){
       let len =  arr.length
       let sum  = arr[len-2] + arr[len-1]
       arr.push(sum)
    }
    console.log(arr.pop())
}

findfibonacci(8)
