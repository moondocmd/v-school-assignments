
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

function forception(people, alphabet){
    var names = [];
    for (let i = 0; i < people.length; i++){
        names[i] = [];
        names[i].push(people[i]);
        for (let j = 0; j < alphabet.length; j++){
            names[i].push(alphabet[j]);
        }
    }
    return(names);
}
console.log(forception(people, alphabet));




