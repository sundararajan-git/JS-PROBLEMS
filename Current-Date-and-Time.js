/*
Write a JavaScript program to display the current day and time in the following format.
Today is : Tuesday.
Current time is : 10 : 30 : 38 PM ( day or night )
*/

function  display() {

  // get current date and time
  let today = new Date()
   
   // get number day in week
   let dayIndex = today.getDay()
    
   // set days
   let dayList = ["Sunday","Monday","Tuesday","Wendesday","Thursday","Friday","Saturday"]
   
   // log today name 
   console.log("Today is : " + dayList[dayIndex])
   
   // get hours ,minutes ,seconds
   let hour = today.getHours()
   let minutes = today.getMinutes()
   let seconds = today.getSeconds()
   
   // reset hour format railway time to normal time
   hour = (hour >= 12) ? hour -12 : hour
   
   
   // set is AM or PM 
   let prepand = (hour >= 12) ? "PM" : "AM"
   
  
   
   // find day or night
   
   let sunrise = new Date();
   let sunset = new Date()
   
   sunrise.setHours(6,0,0)
   sunset.setHours(18,0,0)
   
   let checkIsDay ;
   
   if(today >= sunrise && today <= sunset){
     checkIsDay = "Day"
   }else{
     checkIsDay = "Night"
   }
   
   
    console.log("Current Time is : " + hour + ": "   + minutes + ": " + seconds + " " + prepand + " " + checkIsDay)
    
}

display()
