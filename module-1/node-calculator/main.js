var readlineSync = require('readline-sync');

function add(num1, num2){return parseFloat(num1) + parseFloat(num2);}
function sub(num1, num2){return parseFloat(num1) - parseFloat(num2);}
function mul(num1, num2){return parseFloat(num1) * parseFloat(num2);}
function div(num1, num2){return parseFloat(num1) / parseFloat(num2);}

var num1 = 0;
var num2 = 0;

while (!isNaN(num1) && !isNaN(num2)){
    num1 = readlineSync.question('Please enter the first number, or any other character to exit: ');
    num2 = readlineSync.question('Please enter the second number, or any other character to exit: ');
    var operation = readlineSync.question('Please enter the operation to perform: "add", "sub", "mul", "div": ');

    switch(operation) {
        case "add":
            result = add(num1, num2);
            break;
        case "sub":
            result = sub(num1, num2);
            break;
        case "mul":
            result = mul(num1, num2);
            break;
        case "div":
            result = div(num1, num2);
            break;
        default:
            console.log("I didn't understand your operation, try again");
            result = null;
            break;
    }

    if (isNaN(result)){
        break;
    }
    
    console.log('The result is ' + result);
}
