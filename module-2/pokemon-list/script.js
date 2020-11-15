
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr = new XMLHttpRequest();
        // method  // url                     // async?
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showData(data.objects[0].pokemon)
    } 
}

function showData(arr){
    arr.forEach(element => {
        console.log(`${element.name}`)
    })
    // const h1 = document.createElement('h1')
    // h1.textContent = luke.name
    // document.body.appendChild(h1)
}