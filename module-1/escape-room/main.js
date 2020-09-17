var readlineSync = require('readline-sync');

var handInHole = false;
var hasKey = false;

while(!handInHole){
    var response = readlineSync.question('Would you like to:\n1. Put Hand In Hole\n2. Find the Key\n3. Open the Door\nSelection: ');
    if(response == 2){
        hasKey = true;
        console.log("\nYou've got the key, go ahead and open the door in the next round\n");
    }
    else if((response == 3) && hasKey){
        console.log("\nYOU WIN!\n");
        break;
    }
    else{
        console.log("\nGame Over\n");
        handInHole = true;
    }
}
