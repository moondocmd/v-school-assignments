
function capilizeAndLowercase(word){
    return (word.toUpperCase() + word.toLowerCase())
}

function findMiddleIndex(word){
    return Math.floor(word.length/2);
}

function returnFirstHalf(word){
    return word.slice(0, findMiddleIndex(word));
}

function capilizeAndLowercase(word){
    return word.slice(0, findMiddleIndex(word)).toUpperCase() + 
        word.slice(findMiddleIndex(word), word.length).toLowerCase();
}

console.log(capilizeAndLowercase("HelLo"));
console.log(findMiddleIndex("Hello"));
console.log(returnFirstHalf("Hello"));
console.log(capilizeAndLowercase("Hello World"));
