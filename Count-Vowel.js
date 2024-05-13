
/*
Write a JavaScript program to count
the number of vowels in a given string.
*/

function countVowel(str){
    let vow = ['a','e','i','o','u']
    let sep = str.split("")
    let total = 0;
    let obj = {}
    sep.map((i)=>{
        vow.map((j)=>{
        if(i===j){    
          total++;
          if(obj[i]){
            obj[i] = obj[i] +1
          }else{
              obj[i] = 1 ;
          }
        }
        })
    })
   console.log(total)
    console.log(obj)
}

countVowel("JavaScript ")
countVowel(" python")
