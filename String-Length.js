/*
Create a function which returns the
length of a string, WITHOUT using
String.length property.
*/

function length(str){
  let count = 0;
  for(let i in str) {
      count++
  }
    console.log(count)
}

length("Hello World") //11

length("Edabit") // 6

length("wash your hands!") // 16
