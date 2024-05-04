/*
Write a JavaScript program to calculate the days 
left before Christmas.
*/

function  calDay() {

    // current date
   let today = new Date()

    //  Christmas Date
   let christmasDay = new Date(today.getFullYear(),11,25)
 
    //  calculate milliseconds 
    let milliseconds = christmasDay - today

    // let convert  milleseconds to day
    
    /*
    1 second = 1000 milliseconds
    1 minute = 60 seconds = 60 * 1000 milliseconds
    1 hour = 60 minutes = 60 * 60 * 1000 milliseconds
    1 day = 24 hours = 24 * 60 * 60 * 1000 milliseconds

     fomula: 
       Day = millieeconds / (1000*60*60*24)
    */

    if( today.getMonth() >= 10 && today.getDate() > 25 ) {
        christmasDay.setFullYear((christmasDay.getFullYear()+1))
    }

    let Days = Math.ceil(milliseconds / (1000*60*60*24))

    console.log( Days + "days left")
    
}

calDay()



    
