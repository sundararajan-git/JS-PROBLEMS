/*
Create a function that returns 
the selected filename from a path. 
Include the extension in your answer.
*/

function getFilename(str){
    let finalArray = str.split("/")
    console.log(finalArray.pop())

}

getFilename("C:/Projects/pil_tests/ascii/edabit.txt")  //  "edabit.txt"

getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3")  //  "Beethoven_5.mp3"

getFilename("ffprobe.exe") //  "ffprobe.exe"
