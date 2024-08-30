function checkAnagrams(p1,p2){
    p1 = p1.split("").sort().join("")
    p2 = p2.split("").sort().join("")
    const isTrue = p1.toLowerCase() === p2.toLowerCase()
    return isTrue
}

console.log(checkAnagrams("listen","silent"))