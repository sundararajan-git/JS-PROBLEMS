
/* 
Write a JavaScript program to convert temperatures to and
from Celsius, Fahrenheit.  
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.22222222222222
*/

function convertFandC(){

    // given values 
    let celsius = 60
    let fahrenhit = 45

    // given formula :  c/5 = (f-32)/9
    
    //  find celsius to fahrenheit 
    let celsius_to_fahrenheit = ((celsius/5)*9)+32

   // find fahrenheit to celsius 
    let fahrenheit_to_celsius = ((fahrenhit-32)/9)*5

    console.log("fahrenheit is "+ celsius_to_fahrenheit + "°F")
    console.log("celsius is "+fahrenheit_to_celsius + "°C")
    
}

convertFandC()
