
class Player {
    constructor(totalCoins, status, hasStar, gameActive=true, name=''){
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
        this.gameActive = gameActive;
        this.name = name;
    }

    setName(namePicked){
        console.log(`Name Picked: ${namePicked}`)
        this.name = namePicked;
    }

    gotHit(){
        if (this.hasStar){
            console.log("Your Star protected You!");
            this.hasStar = false;
        } else {
            this.status = (this.status === "Powered Up") ? "Big" : 
                (this.status === "Big") ? "Small" : this.endGame();
        }
    }

    gotPowerUp(){
        if (this.status === "Powered Up") this.hasStar = true;
        else if (this.status === "Big") this.status = "Powered Up";
        else this.status = "Big";
    }

    addCoin(){ this.totalCoins++ }

    print(){
        console.log(`\nName: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}`);
        if (this.hasStar) console.log("You Have a Star!");
    }

    endGame(){
        this.gameActive = false;
        console.log("\nGame Over\n");
        clearInterval(timer);
    }

}

let player = new Player(0, "Big", false);
player.setName("Luigi");

let timer = setInterval( () => {
    player.print();
    let randomEvent = Math.floor((Math.random() * 3));
    console.log(`\nRandom Event: ${randomEvent}`)
    if (randomEvent === 0){
        player.gotHit();
    } else if (randomEvent === 1){
        player.gotPowerUp();
    } else player.addCoin();
}, 1000); 