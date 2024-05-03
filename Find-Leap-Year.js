/*
.Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
*/

function  findLeapYear(year) {
    console.log(year%100 === 0 ? year % 400 === 0  :  year%4 === 0)
}

findLeapYear(1700)
findLeapYear(2012)
findLeapYear(200)


