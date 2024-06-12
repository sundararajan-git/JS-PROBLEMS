/*
Write a function that takes an array 
of drinks and returns an array 
of only drinks with no sugar in them. 
Drinks that contain sugar (in this challenge) are:
cola
fanta
*/

function skipTooMuchSugarDrinks(arr){
    let finalArray = ["cola","fanta"]

    let out = arr.filter((i)=>{
      return  !finalArray.includes(i)
    })
    console.log(out)
}

skipTooMuchSugarDrinks(["fanta", "cola", "water"]) // ["water"]

skipTooMuchSugarDrinks(["fanta", "cola"]) //  []

skipTooMuchSugarDrinks(["lemonade", "beer", "water"]) //  ["lemonade", "beer", "water"]
