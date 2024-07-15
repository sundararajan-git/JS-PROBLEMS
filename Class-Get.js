
/*
Classes For Fetching 
Information on a Sports Player
 */

class Player{
    constructor(name,age,height,weight){
        this.name = name;
        this.age= age;
        this.height= height;
        this.weight= weight
    }
     getAge(){
         console.log(`${this.name} is age ${this.age}`)
     }
    getHeight(){
        console.log(`${this.name} is ${this.height}cm`)
    }
    getWeight(){
        console.log(`${this.name} weighs ${this.weight}kg`)
    }
}


p1 = new Player("David Jones", 25, 175, 75)

 p1.getAge() //  "David Jones is age 25"
 p1.getHeight() // "David Jones is 175cm"
 p1.getWeight() // "David Jones weighs 75kg"
