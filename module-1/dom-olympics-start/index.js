
/* Helper Functions */
function changeBackgroundColor(className, color){

    var mess = document.getElementsByClassName(className);

    for (let i = 0; i < mess.length; i++) {
        mess[i].setAttribute("style", "background-color: "+ color);
    }
}

/* QUALIFIER */

//Create Header elements and data
document.getElementById("header").className = "header";
document.getElementById("header").append("JavaScript Made This!!");

var newP = document.createElement("p");
var nameSpan = document.createElement("span");
nameSpan.textContent = "Mike Mooney";
nameSpan.className = "name";
newP.append(nameSpan);
newP.append(" wrote the Javascript");
document.getElementById("header").append(newP);

/* Bronze */

//get all children nodes of messages class
var messages = document.getElementsByClassName("messages")[0].children;

var dialog = [
    "The Detroit Lions are the Best NFL team, period.",
    "You're nuts, obviously it's the Browns!  No Question!",
    "The Browns?!?",
    "You're right... maybe we're both nuts"
];

for (let i = 0; i < messages.length; i++) {
    messages[i].textContent = dialog[i];
}

document.getElementById("clear-button").addEventListener(
    "click", function(){ 
        for (let i = 0; i < messages.length; i++) {
            changeBackgroundColor('left','white');
            changeBackgroundColor('right', 'white');
            messages[i].textContent = null;
        }
});

/* Silver */

var themeDropDown = document.getElementById("theme-drop-down");

//TODO ADD MORE OPTIONS
themeDropDown.addEventListener("change", function(){
        console.log("DETECTED A CHANGE " + themeDropDown.value);
        if (themeDropDown.value === "theme-two"){
            changeBackgroundColor('left', 'red');
            changeBackgroundColor('right', 'black');
        } else if (themeDropDown.value === "theme-one") { 
            console.log("THEME ONE");
            changeBackgroundColor('left', 'burlywood');
            changeBackgroundColor('right', 'lightblue');
        }
});

/* GOLD & Extra Credit */

// get messages parent element
var main = document.getElementById("main").childNodes[3];

var form = document.getElementsByName("message")[0];

form.addEventListener("submit", function(e){
    // stop page from refreshing on submit
    e.preventDefault();
    const newDiv = document.createElement("div");

    newDiv.append(document.getElementById("input").value);
    if (main.children.length % 2 === 0) newDiv.className = "message left";
    else newDiv.className = "message right";

    main.append(newDiv);
});
