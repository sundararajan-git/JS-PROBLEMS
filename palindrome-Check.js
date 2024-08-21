
function checkPalindrome(str){
    let reversedStr = str.split('').reverse().join("")
    return str === reversedStr
}

console.log(checkPalindrome("madam"))
