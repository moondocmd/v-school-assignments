
// copied example myMap code from https://www.w3schools.com/graphics/google_maps_intro.asp

function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(42.329420,-83.040018),
      zoom:15,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}