/*
Your task is to create a Circle constructor 
that creates a circle with a radius provided by an argument.
The circles constructed must have two methods getArea() (PI*r^2) and 
getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).
 */

class Circle{
     constructor(radius){
         this.r = radius
     }
    getArea(){
        console.log(3.14* (this.r * this.r))
    }
    getPerimeter(){
        console.log(2*(3.14*this.r))
    }
}

let circy = new Circle(11)
circy.getArea() 

let circy1 = new Circle(4.44)
circy1. getPerimeter()

