/*
Write a JavaScript program to find out if 1st January will be a 
Sunday between 2014 and 2050.
*/

function  find() {

    for(let y=2014; y<= 2050; y++){
     let date= new Date(y ,0,1)
    if(date.getDay() === 0) console.log(y)
    }
}

find()




    
