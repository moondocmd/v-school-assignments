var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

const Alphabet =  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();

if (shift > 26) {
    shift = shift % 26;
}

let newString = '';

for (let i = 0; i < input.length; i ++){
    if (Alphabet.indexOf(input[i]) + shift > 26){
        newString += (Alphabet.charAt((Alphabet.indexOf(input[i]) + shift) - 26));
    } else if (Alphabet.indexOf(input[i]) === -1){ newString += input[i]; } 
    else {newString += (Alphabet.charAt(Alphabet.indexOf(input[i]) + shift))}
}

console.log("Result = ",  newString);
