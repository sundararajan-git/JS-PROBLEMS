/*
Create a class named User and create a way to check the
number of users (number of instances) that were created, 
so that the value can be accessed as a class attribute.
 */

class User{
    static count = 0;
     constructor(user){
       User.count++ 
     }
    static userCount(){
        console.log(User.count)
    }
}

u1 = new User("johnsmith10")
User.userCount() //  1

u2 = new User("marysue1989")
User.userCount() //  2

u3 = new User("milan_rodrick")
User.userCount() //  3

