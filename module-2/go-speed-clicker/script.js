
setTimeout(function(){
    location.reload(true);
    alert("The page will now refresh, you clicked: " + localStorage.clickcount + " time(s).");
    localStorage.clickcount = 0;
}, 15000);   

function clickCounter() {
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
        localStorage.clickcount = 1;
    }
    document.getElementById("result").value = "# of clicks " + localStorage.clickcount + " time(s).";
}