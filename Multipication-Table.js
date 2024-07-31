/*
Multiplication Table
 */

const printTable = (j)=>{
    try{
        let i = 1;
          do{
            console.log(i+" * "+ j + " =  "+i*j)
            i++
        }while(i<=10)
    }catch(err){
        console.error(err)
    }
}
for(let j =1; j<=10;j++){
printTable(j)
console.log("---------------------------")
}
