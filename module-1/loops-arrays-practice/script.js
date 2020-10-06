var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

let count = 0;
for (item of officeItems){
    if (item === "computer") count++;
}
console.log(count);

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

for (person of peopleWhoWantToSeeMadMaxFuryRoad){
    let gender = person.gender === "male" ? "him" : "her";
    if (person.age < 18) 
    console.log(person.name + " is " + person.age + " years old, Do Not let " + gender + " in!");
    else console.log(person.name + " is " + person.age + " years old, go ahead and let " + gender + " in!") 
}


let toggleArr = [9, 3, 4, 2];

let toggleCount = 0;

for (let i = 0; i < toggleArr.length; i++){
    toggleCount += parseInt(toggleArr[i]);
}

console.log(toggleCount % 2 === 0 ? "light is off" : "light is on");