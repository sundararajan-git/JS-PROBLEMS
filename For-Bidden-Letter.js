
/*
Given a letter and an array of words, 
return whether the letter does not appear in any of the words.
*/

function  forbiddenLetter(char, arr){

    let isTrue = true;
 
   arr.map((i)=>{
        if(i.includes(char)){
          isTrue = false
        }
   })
    console.log(isTrue)
}

forbiddenLetter("r", ["rock", "paper", "scissors"])  // false

forbiddenLetter("a", ["spoon", "fork", "knife"])  //  true

forbiddenLetter("m", []) //  true

