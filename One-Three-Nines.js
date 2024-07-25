/*
Given an int, figure out how many ones, 
threes and nines you could fit into the
number. You must create a class. 
You will make variables (class.ones, class.threes, class.nines)
to do this.
 */

class OnesThreesNines{
     constructor(n){
         this.num = n
     }
    ones(){
        console.log(Math.floor(this.num/ 1))
    }
    threes(){
        console.log(Math.floor(this.num/ 3))
    }
    nines(){
        console.log(Math.floor(this.num/ 9))
    }
}

let n1 = new OnesThreesNines(5)
n1.nines() // 0
n1.ones() //  5
n1.threes() //  1

