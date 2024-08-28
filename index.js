// Iteration 1: Names and Input
const hacker2 = "Clara"
const hacker1 = "Cristina"

console.log(`The driver´s name is ${hacker1} `)
console.log(`The navigator´s name is ${hacker2} `)

// Iteration 2: Conditionals

if(hacker1.length>hacker2.length){



    console.log("The driver has the longest name, it has " + hacker1.length + " characters")
}else if(hacker1.length<hacker2.length){

    console.log("The driver has the longest name, it has " + hacker2.length + " characters")
}else {

    console.log("Wow, you both have equally long names, XX characters!")
}


// Iteration 3: Loops

let driverCapitalLetter = hacker1.toUpperCase()

let h1Spaced = ''

for(let i=0; i<driverCapitalLetter.length; i++){

let charactertoAdd = driverCapitalLetter[i]

 h1Spaced += charactertoAdd + ' '

}

console.log(h1Spaced)

//Const character =  driverCaptialLetters[I]
//charactertoAdd += character + ‘ (space)’
 //charactertoAdd = driverCapitalLetter[i]

/////

// let encodedString = 'bflkdjbod??a***fjoi1! !wwkn* Ooij!li?j'

// let secretCode = ''

// for (let i = 0; i < encodedString.length; i++) {

//     let characterToAdd = encodedString[i]

//     if (characterToAdd === '*') {
//         characterToAdd = 'a'
//     } else if (characterToAdd === '!' || characterToAdd === '?') {
//         // characterToAdd = '' 
//         continue; // reserved word; it forces the loop to stop the iteration, skip it and continue 
//     } else if (characterToAdd === ' ') {
//         break // reserved word; it stops the loop
//     }

//     secretCode += characterToAdd 
// }

// console.log(secretCode)