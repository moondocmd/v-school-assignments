var divs = document.querySelectorAll('div');

var colorTable = {
    65 : 'aqua',
    66 : 'blue',
    67 : 'crimson',
    68 : 'darkmagenta',
    70 : 'fuchsia',
    71 : 'green',
    72 : 'hotpink',
    73 : 'indigo',
    75 : 'khaki',
    76 : 'lightcyan',
    77 : 'mediumpurple',
    82 : 'red',
    89 : 'yellow'
};

function divColorChange(color){
    for (var i = 1; i < divs.length; i++) {        
        divs[i].style.backgroundColor = color;
    }
}

document.addEventListener('wheel', function(){ 
    divColorChange('orange');
});

for (var i = 1; i < divs.length; i++) {
    divs[i].addEventListener("dblclick", function(){ this.style.backgroundColor = "green";});
    divs[i].addEventListener("mouseover", function(){ this.style.backgroundColor = "blue";});
    divs[i].addEventListener("mouseout", function(){ this.style.backgroundColor = "yellow";});
    divs[i].addEventListener("mousedown", function(){ this.style.backgroundColor = "red";});
}

document.addEventListener("keydown", function(event) {
    if (colorTable[parseInt(event.which)]){
        //console.log(colorTable[parseInt(event.which)]);
        divColorChange(colorTable[parseInt(event.which)]);
    }
})