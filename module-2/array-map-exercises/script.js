
// 1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr){
    return arr.map(function(num){
        return num * 2;
    })
  }
  
console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]


// 2) Take an array of numbers and make them strings
function stringItUp(arr){
    return arr.map(function(num){
        return num.toString();
    })
  }
  
  console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]


// 3) Capitalize each of an array of names
function capitalizeNames(arr){
    return arr.map(function(name){
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    })
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// 4) Make an array of strings of the names
function namesOnly(arr){
    return arr.map(function(obj){
        return obj.name;
    })  
}
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr){
    return arr.map(function(person){
        if (person.age > 17) return person.name + " can go to the matrix"
        else return person.name + " is under age!!"
    })    
}
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 

// 6) Make an array of the names in h1s, and the ages in h2s
function readyToPutInTheDOM(arr){
    return arr.map(function(person){
        return "<h1>" + person.name + "</h1><h2>" + person.age + "</h2>"
    })      
}
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
