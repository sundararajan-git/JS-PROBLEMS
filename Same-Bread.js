/*
Given two arrays, which represent two 
sandwiches, return whether both 
sandwiches use the same type of bread. 
The bread will always be found at the
 start and end of the array.
*/

function hasSameBread(arr1,arr2){
    console.log(arr1[0]===arr2[0] && arr1[arr1.length-1] === arr2[arr2.length-1])
}

hasSameBread(
  ["white bread", "lettuce", "white bread"],
  ["white bread", "tomato", "white bread"]
) // true

hasSameBread(
  ["brown bread", "chicken", "brown bread"],
  ["white bread", "chicken", "white bread"]
) // false

hasSameBread(
  ["toast", "cheese", "toast"],
  ["brown bread", "cheese", "toast"]
) // false



