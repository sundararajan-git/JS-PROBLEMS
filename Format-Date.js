/*
Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

function  display() {

  // get current date and time
  let today = new Date()
  
  // get current date 
  let day = today.getDate()
  // get current month 
  let month = today.getMonth()+1
  
  // get current year 
  let year = today.getFullYear()
  
  // format the day and month
  if(day<10) day = "0"+day
  if(month<10) month = "0"+month
 
  console.log(day+"/"+month+"/"+year)

    
}

display()
