/*
You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given an object of insults, return the
total amount of insults used.
*/

function totalAmountAdjectives(obj){
    let len = Object.keys(obj).length
    console.log(len)
}

totalAmountAdjectives({ a: "moron" }) //  1

totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" })  // 3

totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }) // 4
