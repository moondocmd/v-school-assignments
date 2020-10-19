function getTotals(){
    return (document.getElementById("goombaTotal").value * 5) + 
        (document.getElementById("bobTotal").value * 7) + 
        (document.getElementById("cheepTotal").value * 11);
}

document.getElementById("submit").addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById("total").value = getTotals() + " coins";
});