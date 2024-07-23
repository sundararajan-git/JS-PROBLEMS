
/*
Simple OOP Calculator
 */

class Calculator{
     add(x,y){
         console.log(x+y)
     }
    subtract(x,y){
        console.log(x-y)
    }
    multiply(x,y){
        console.log(x*y)
    }
    divide(x,y){
        console.log(x/y)
    }
}

var calculator = new Calculator()

calculator.add(10, 5) // 15

calculator.subtract(10, 5) //  5

calculator.multiply(10, 5) // 50

calculator.divide(10, 5) // 2

