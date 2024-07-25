/*
Write a class called Name and create the following attributes given a first name and last name (as fname and lname):
An attribute called fullname which returns the first and last names.
An attribute called initials which returns the first letters of the first and last name. Put a . between the two letters.
Remember to allow the attributes fname and lname to be accessed individually as well.
 */

class Name{
     constructor(param1,param2){
         this.firstName = param1;
         this.lastName = param2
     }
    fname(){
        console.log(this.firstName[0].toUpperCase() + this.firstName.slice(1).toLowerCase())
    }
    lname(){
        console.log(this.lastName[0].toUpperCase()+ this.lastName.slice(1).toLowerCase())
    }
    fullname(){
        let first = this.firstName[0].toUpperCase() + this.firstName.slice(1).toLowerCase()
        let second = this.lastName[0].toUpperCase() + this.lastName.slice(1).toLowerCase()
        console.log(first + '  ' + second)
    }
    initials(){
        console.log(this.firstName[0].toUpperCase()+'.'+this.lastName[0].toUpperCase())
    }
}

a1 = new Name("john", "SMITH")

a1.fname() // "John"
a1.lname() // "Smith"
a1.fullname() // "John Smith"
a1.initials() // "J.S"

