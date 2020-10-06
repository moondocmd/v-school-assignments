
/* Preliminaries */

for (let i = 9; i >= 0; i--){
    console.log(i);
}

var fruit = ["banana", "orange", "apple", "kiwi"];

fruit.forEach(element => console.log(element));

/* Bronze */

let arr = [];
for (let i = 0; i < 10; i++){
    arr.push(i);
}
// console.log(arr);

for (let i = 2; i <= 100; i+=2){
    // console.log(i);
}

var fruit2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
var arrF = [];
for (let i = 0; i < fruit2.length; i+=2){
    arrF.push(fruit2[i]);
}

/* Silver */

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

peopleArray.forEach(element => console.log(element.name));

let names = [];
let occupations = [];

for (person of peopleArray){
    names.push(person.name);
    occupations.push(person.occupation);
}

let names2 = [];
let occupations2 = [];

for (let i = 0; i < peopleArray.length; i ++){
    if (i % 2 === 0) names2.push(peopleArray[i].name);
    else occupations2.push(peopleArray[i].occupation);
}

/* Gold */

let arr2 = [];

for (let i = 0; i < 3; i ++){
    arr2[i] = [];
    for (let j = 0; j < 3; j ++){
        arr2[i][j] = 0;
    }
    console.log(arr2[i]);
}

let arr3 = [];

for (let i = 0; i < 3; i ++){
    arr3[i] = [];
    for (let j = 0; j < 3; j ++){
        arr3[i][j] = i;
    }
    console.log(arr3[i]);
}

let arr4 = [];

for (let i = 0; i < 3; i ++){
    arr4[i] = [];
    for (let j = 0; j < 3; j ++){
        arr4[i][j] = j;
    }
    console.log(arr4[i]);
}

for (let i = 0; i < 3; i ++){
  arr4[i] = [];
  for (let j = 0; j < 3; j ++){
      arr4[i][j] = 'x';
  }
  console.log(arr4[i]);
}


// console.log(arr2);
