
// copied example myMap code from https://www.w3schools.com/graphics/google_maps_intro.asp
function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(42.329420,-83.040018),
      zoom:15,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}


function reloadColors() {
  let divs = ["box1", "box2", "box3", "box4", "box5", "box6"];
  divs.forEach(setColor);
}

function setColor(item){
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.getElementById(item).style.backgroundColor = "#" + randomColor;
  document.getElementById(item).innerHTML = "#" + randomColor;
}