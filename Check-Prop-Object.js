
function checkProp(prop){
    const obj = {
        name:"Arun k",
        age:43,
        sex: "male",
        id:001
    }
    return obj[prop] ? true : false
}


console.log(checkProp("age"))
