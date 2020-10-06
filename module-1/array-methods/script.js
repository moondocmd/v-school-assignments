
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function runArrayExercise(){

    console.log("fruit: ", fruit);
    console.log("vegetables: ", vegetables);

    console.log("Remove the last item from the vegetable array.");
    vegetables.pop();
    console.log("fruit: ", fruit);
    console.log("vegetables: ", vegetables);

    console.log("Remove the first item from the fruit array.");
    fruit.shift();
    console.log("fruit: ", fruit);
    console.log("vegetables: ", vegetables);

    console.log("Find the index of orange");
    console.log(fruit.indexOf("orange"));

    console.log("Add that number to the end of the fruit array.");
    fruit.push(fruit.indexOf("orange"));
    console.log("fruit: ", fruit);

    console.log("Use the length property to find the length of the vegetable array.");
    console.log(vegetables.length);

    console.log("Add that number to the end of the vegetable array.");
    vegetables.push(vegetables.length);
    console.log("vegetables: ", vegetables);

    console.log("Put the two arrays together into one array. Fruit first. Call the new Array 'food'");
    var food = fruit.concat(vegetables);
    console.log(food);

    console.log("Remove 2 elements from your new array starting at index 4 with one method.");
    food.splice(4, 2);
    console.log("food: ", food);

    console.log("Reverse your array.");
    food.reverse();
    console.log("food: ", food);

    console.log("Turn the array into a string and return it.");
    var foodString = food.toString();
    console.log("food: ", foodString);
}

runArrayExercise();