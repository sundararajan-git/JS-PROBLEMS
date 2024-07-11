
/*
Create a function that takes a number
that represents a person's programming 
language score, and returns an alphabetised array of
programming languages they are proficient in. Arbitrarily 
assigned points for each language
are listed below:
 */

function getLanguages(score){
   let tableArr = [
        { name: 'C#', points: 1 },
        { name: 'C++', points: 2 },
        { name: 'Java', points: 4 },
        { name: 'JavaScript', points: 8 },
        { name: 'PHP', points: 16 },
        { name: 'Python', points: 32 },
        { name: 'Ruby', points: 64 },
        { name: 'Swift', points: 128 }
    ];

    let outArr = []

    for(let i=0; i < tableArr.length; i++){
        if(score & tableArr[i].points){
         outArr.push(tableArr[i].name)
        }
    }
   console.log(outArr)
}

getLanguages(25) //  ["C#", "JavaScript", "PHP"]

getLanguages(100) //  ["Java", "Python", "Ruby"]

