var readlineSync = require('readline-sync');

let enemies = [
    'Hannibal Lecter', 
    'Anton Chigurh', 
    'Nurse Ratched', 
    'Michael Myers',
    'Detective Alonzo Harris'
];

let inventoryItems = [
    'fly-swatter',
    'spatula',
    'needle-nose-plyers',
    'rock'
];

function playGame(){
    console.log("\n\n\nLETS GET READY TO RUMBLE!!!!\n")
    let level = 0;
    let inventory = [];
    let health = 100;

    while (health > 0){
        level ++;
        console.log(`Current level: ${level}`);
        let wildEnemy = Math.floor(Math.random() * 10);
        if (wildEnemy < 8){ // about a 2/3 chance
            console.log("You did not encounter any enemies on this level");
        } else {
            const newHealth = fight(health);
            if (newHealth > health) // player beat the enemy
                inventory.push(inventoryItems[Math.floor(Math.random() * inventoryItems.length)]);
            health = newHealth;
            console.log(`Hey ${name}, here's your current inventory: ${inventory}`);
        }
    }
    console.log(`\nThank you for playing, you made it to level ${level}, and you finished with the following inventory: ${inventory}`);
}

function fight(health){
    const enemy = enemies[Math.floor(Math.random() * 5)];
    const enemyWillSurvive = Math.random() >= 0.5 ? true : false; // ~50% chance
    console.log(`\n\nalright time to fight: ${enemy}, you currently have ${health}% health\n`);
    let move = readlineSync.question('What do you want to do next? (a)ttack or any other key to run: ');
    if (move === "a" && enemyWillSurvive){
        console.log("Sorry mate, they thrashed you...");
        health -= Math.floor(Math.random() * 20); // player lost
    } else if (move === "a"){
        console.log("Nice job, you killed the enemy!");
        health += 10;
    } else {
        console.log("You're running!");
        health = enemyWillSurvive ? 0 : health; // 50 % chance of survival
    }
    console.log(`after this fight you have ${health}% health`);
    console.log(`Oh no ${enemy} just whacked you on your way out!`);
    return health - Math.floor(Math.random() * 10); // take a little extra health off for that whack
}

console.log("Hello brave soul, welcome to the toughest game on the Internet!!");

let name = readlineSync.question('What\'s your name? ');

let choice = readlineSync.question(`alright ${name}, let\'s get going...go ahead and enter 'w' to begin: `);
if (choice === 'w') playGame();